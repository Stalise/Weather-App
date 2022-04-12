import { call, takeEvery, put, select } from "redux-saga/effects";

import { changeCoordinatesAction, errorCoordinatesAction, changeTimezoneAction } from '../../actions/coordinatesAction';
import { ICoordinatesRequest, IRequestOpenWeather, IRequestWeatherBit } from '../../types/weatherTypes';
import { transformOpenWeather, transformWeatherBit } from '../../helpers/transformWeatherData';
import { changeWeatherAction, clearWeatherAction } from '../../actions/weatherActions';
import { changeThemeAction } from '../../actions/themeActions';
import { currentTimeHelper } from '../../helpers/currentTimeHelper';
import { sagasConstants } from "../../constants/saga";
import { weatherRequests } from '../../api/api';

function* workerWeatherBitApi() {
   const { lat, lon, timezone } = yield select((store) => store.coordinates);

   const request: IRequestWeatherBit | string = yield call(weatherRequests.getWeatherBit, [lat, lon])
   if (typeof request !== 'string') {

      if (timezone === '') {
         yield put(changeTimezoneAction(request.timezone))
      }

      const newWeather = transformWeatherBit(request.data)

      yield put(changeThemeAction(newWeather.todayWeather))

      yield put(changeWeatherAction(newWeather.newDaily, 'dataWeatherBit'))
   }
}

function* workerOpenWeatherApi() {
   const { lat, lon, timezone } = yield select((store) => store.coordinates);

   const request: IRequestOpenWeather | string = yield call(weatherRequests.getOpenWeather, [lat, lon])

   if (typeof request !== 'string') {

      if (timezone === '') {
         yield put(changeTimezoneAction(request.timezone))
      }

      const newWeather = transformOpenWeather(request.daily)

      yield put(changeThemeAction(newWeather.todayWeather))

      yield put(changeWeatherAction(newWeather.newDaily, 'dataOpenWeather'))
   }
}

function* workerCoordinatesCity(data: { type: string, city: string }) {
   const request: ICoordinatesRequest | string = yield call(weatherRequests.getCoordinatesCity, data.city)

   if (typeof request !== 'string') {

      yield put(clearWeatherAction())
      yield put(changeCoordinatesAction(request))
   } else {
      yield put(errorCoordinatesAction(request))
   }
}

function* workerCoordinatesGeograph(data: { type: string, payload: { lat: string, lon: string, usePersistPause: () => void } }) {

   const { timeInitialIp } = yield select((store) => store.coordinates);

   if (currentTimeHelper() - timeInitialIp < 3600000) {
      data.payload.usePersistPause()
      return
   }

   const request: ICoordinatesRequest = yield call(weatherRequests.getCoordinatesGeograph, [data.payload.lat, data.payload.lon])

   if (typeof request !== 'string') {
      request.timeInitialIp = currentTimeHelper()

      yield put(clearWeatherAction())
      yield put(changeCoordinatesAction(request))
      data.payload.usePersistPause()
   } else {
      yield put(errorCoordinatesAction(request))
   }
}

export function* watcherCoordinatesCity() {
   yield takeEvery(sagasConstants.SAGA_CHANGE_COORDINATES_CITY, workerCoordinatesCity)
}

export function* watcherCoordinatesGeograph() {
   yield takeEvery(sagasConstants.SAGA_CHANGE_COORDINATES_GEOGRAPH, workerCoordinatesGeograph)
}

export function* watcherOpenWeatherApi() {
   yield takeEvery(sagasConstants.SAGA_OPEN_WEATHER_API, workerOpenWeatherApi)
}

export function* watcherWeatherBitApi() {
   yield takeEvery(sagasConstants.SAGA_WEATHER_BIT_API, workerWeatherBitApi)
}
