import axios from 'axios';

const openWeatherId = process.env.REACT_APP_OPENWEATHER_ID
const weatherBitId = process.env.REACT_APP_WEATHERBIT_ID

const instanceOpenWeather = axios.create({
   baseURL: 'https://api.openweathermap.org/',
});

export const weatherRequests = {
   getCoordinatesCity: async (city: string) => {
      try {
         const request = await instanceOpenWeather.get(`geo/1.0/direct?q=${city}&limit=2&appid=${openWeatherId}`)

         if (request.data.length) {
            return request.data[0]
         }

         return 'City not found'
      } catch (error) {
         return 'Something was wrong'
      }
   },

   getCoordinatesGeograph: async (data: number[] | any[]) => {

      try {
         const request = await instanceOpenWeather.get(`geo/1.0/reverse?lat=${data[0]}&lon=${data[1]}&limit=2&appid=${openWeatherId}`)

         if (request.data.length) {
            return request.data[0]
         }

         return 'City not found'
      } catch (error) {
         return 'Something was wrong'
      }
   },

   getOpenWeather: async (coordinates: number[]) => {
      try {
         const request = await instanceOpenWeather.get(`data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&lang=ru&exclude=minutely,hourly,alerts&units=metric&appid=${openWeatherId}`)

         return request.data
      } catch (error) {
         return 'Something was wrong'
      }
   },

   getWeatherBit: async (coordinates: number[]) => {
      try {
         const request = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${coordinates[0]}&lon=${coordinates[1]}&days=7&key=${weatherBitId}`)
         return request.data
      } catch (error) {
         return 'Something was wrong'
      }
   },
};
