import { call, spawn, all } from "redux-saga/effects";
import { watcherCoordinatesCity, watcherCoordinatesGeograph, watcherOpenWeatherApi, watcherWeatherBitApi } from './weatherSaga';

export default function* rootSaga(): any {

   const sagas = [watcherCoordinatesCity, watcherCoordinatesGeograph, watcherOpenWeatherApi, watcherWeatherBitApi]

   const retrySagas = yield sagas.map((saga) => {
      // если сага возвращает ошибку, то её вызывает еще раз.
      return spawn(function* startSagas() {
         while (true) {
            try {
               yield call(saga)
               // если в catch не сделать break/исправить вызов саги, то может быть бесконечный цикл вызова
            } catch (e) {
               break;
            }
         }
      })
   })

   yield all(retrySagas)
}
