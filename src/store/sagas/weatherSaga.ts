import { call, takeEvery, put } from "redux-saga/effects";

import { ICoordinatesRequest, IWeatherRequest } from '../../types/weatherTypes';
import { sagasConstants } from "../../constants/saga";
import { weatherRequests } from '../../api/api';
import { changeCoordinatesAction, errorCoordinatesAction } from '../../actions/coordinatesAction';
import { changeWeatherAction } from '../../actions/weatherActions';
import { transformDaysWeather } from '../../helpers/transformDaysWeather';

function* workerWeather(coordinates: ICoordinatesRequest) {
   const request: IWeatherRequest | string = yield call(weatherRequests.getWeather, [coordinates.lat, coordinates.lon])

   if (typeof request !== 'string') {
      const newWeather = transformDaysWeather(request.daily)
      yield put(changeWeatherAction(newWeather))
   }
}

function* workerCoordinates(data: { type: string, city: string }) {
   const request: ICoordinatesRequest | string = yield call(weatherRequests.getCoordinates, data.city)

   if (typeof request !== 'string') {
      yield put(changeCoordinatesAction(request))
      yield workerWeather(request)
   } else {
      yield put(errorCoordinatesAction(request))
   }
}

export function* watcherCoordinates() {
   yield takeEvery(sagasConstants.SAGA_CHANGE_COORDINATES, workerCoordinates)
}
