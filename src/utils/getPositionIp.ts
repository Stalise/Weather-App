import { sagasConstants } from '../constants/saga';
import { persistor } from '../store/store';

export const getPositionIp = async (dispatch: any) => {
   persistor.pause()

   const userPos: any = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
         (coordinates) => res(coordinates.coords),
         (err) => res(err),
      )
   })

   if (userPos.latitude) {
      persistor.persist()

      dispatch({
         type: sagasConstants.SAGA_CHANGE_COORDINATES_GEOGRAPH,
         payload: {
            lat: userPos.latitude,
            lon: userPos.longitude,
            usePersistPause: () => persistor.pause(),
         },
      })
   }
}
