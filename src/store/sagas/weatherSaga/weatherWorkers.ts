import { call, put, select } from "redux-saga/effects";

import { changeCoordinatesAction, errorCoordinatesAction, changeTimezoneAction } from '../../../actions/coordinatesAction';
import { ICoordinatesRequest, IRequestOpenWeather, IRequestWeatherBit } from '../../../types/weatherTypes';
import { transformOpenWeather, transformWeatherBit } from '../../../helpers/transformWeatherData';
import { changeWeatherAction, clearWeatherAction, changeApiAction, changeLoadWeatherAction } from '../../../actions/weatherActions';
import { changeThemeAction } from '../../../actions/themeActions';
import { currentTimeHelper } from '../../../helpers/currentTimeHelper';
import { weatherRequests } from '../../../api/api';

export function* workerWeatherBitApi() {
   const { currentDegrees } = yield select((store) => store.weather);
   const { lat, lon, timezone } = yield select((store) => store.coordinates);

   yield put(changeLoadWeatherAction(true))

   const request: IRequestWeatherBit | string = yield call(weatherRequests.getWeatherBit, [lat, lon])

   if (typeof request !== 'string') {

      if (timezone === '') {
         yield put(changeTimezoneAction(request.timezone))
      }

      const newWeather = transformWeatherBit(request.data, currentDegrees)

      yield put(changeThemeAction(newWeather.todayWeather))

      yield put(changeWeatherAction(newWeather.newDaily, 'dataWeatherBit'))
   }

   yield put(changeLoadWeatherAction(false))
}

export function* workerOpenWeatherApi() {
   const { currentDegrees } = yield select((store) => store.weather);
   const { lat, lon, timezone } = yield select((store) => store.coordinates);

   yield put(changeLoadWeatherAction(true))

   const request: IRequestOpenWeather | string = yield call(weatherRequests.getOpenWeather, [lat, lon])

   if (typeof request !== 'string') {

      if (timezone === '') {
         yield put(changeTimezoneAction(request.timezone))
      }

      const newWeather = transformOpenWeather(request.daily, currentDegrees)

      yield put(changeThemeAction(newWeather.todayWeather))

      yield put(changeWeatherAction(newWeather.newDaily, 'dataOpenWeather'))
   }

   yield put(changeLoadWeatherAction(false))
}

export function* workerCoordinatesCity(data: { type: string, city: string }) {
   const request: ICoordinatesRequest | string = yield call(weatherRequests.getCoordinatesCity, data.city)

   if (typeof request !== 'string') {

      yield put(clearWeatherAction())
      yield put(changeCoordinatesAction(request))
   } else {
      yield put(errorCoordinatesAction(request))
   }
}

export function* workerCoordinatesGeograph(data: { type: string, payload: { lat: string, lon: string, usePersistPause: () => void } }) {

   const { timeInitialIp } = yield select((store) => store.coordinates);

   if (currentTimeHelper() - timeInitialIp < 3600000) {
      data.payload.usePersistPause()
      return
   }

   const request: ICoordinatesRequest = yield call(weatherRequests.getCoordinatesGeograph, [data.payload.lat, data.payload.lon])

   if (typeof request !== 'string') {
      request.timeInitialIp = currentTimeHelper()

      yield put(changeApiAction('OpenWeatherApi'))
      yield put(changeCoordinatesAction(request))
      yield call(workerWeatherBitApi)
      yield data.payload.usePersistPause()
   } else {
      yield put(errorCoordinatesAction(request))
      yield data.payload.usePersistPause()
   }
}
