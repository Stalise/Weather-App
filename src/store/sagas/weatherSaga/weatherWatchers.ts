import { takeEvery } from "redux-saga/effects";

import { sagasConstants } from "../../../constants/saga";
import { workerWeatherBitApi, workerOpenWeatherApi, workerCoordinatesCity, workerCoordinatesGeograph } from './weatherWorkers';

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
