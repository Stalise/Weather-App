import { IWeatherDaily } from '../types/weatherTypes';
import { changeWeatherAction, changeDegreesAction } from '../actions/weatherActions';

export const convertFahrenheit = (data: IWeatherDaily[]): IWeatherDaily[] => {
   const updateData = data.map((elem) => {
      const recreateDay = { ...elem }
      recreateDay.temp = Math.round((recreateDay.temp - 32) * (5 / 9))
      return recreateDay
   })

   return updateData
}

export const convertCelsius = (data: IWeatherDaily[]): IWeatherDaily[] => {
   const updateData = data.map((elem) => {
      const recreateDay = { ...elem }
      recreateDay.temp = parseFloat((recreateDay.temp * (9 / 5) + 32).toFixed(1))
      return recreateDay
   })

   return updateData
}

export const changeDegreesHelper = (currentDegrees: string, dataOpenWeather: IWeatherDaily[], dataWeatherBit: IWeatherDaily[], dispatch: any): void => {
   if (currentDegrees === '°C') {
      dispatch(changeDegreesAction('°F'))

      if (dataOpenWeather.length > 0) {
         const updateDegress = convertCelsius(dataOpenWeather)
         dispatch(changeWeatherAction(updateDegress, 'dataOpenWeather'))
      }

      if (dataWeatherBit.length > 0) {
         const updateDegress = convertCelsius(dataWeatherBit)
         dispatch(changeWeatherAction(updateDegress, 'dataWeatherBit'))
      }

   } else {
      dispatch(changeDegreesAction('°C'))

      if (dataOpenWeather.length > 0) {
         const updateDegress = convertFahrenheit(dataOpenWeather)
         dispatch(changeWeatherAction(updateDegress, 'dataOpenWeather'))
      }

      if (dataWeatherBit.length > 0) {
         const updateDegress = convertFahrenheit(dataWeatherBit)
         dispatch(changeWeatherAction(updateDegress, 'dataWeatherBit'))
      }

   }
}
