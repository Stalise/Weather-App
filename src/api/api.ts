import axios from 'axios';

const openWeatherId = process.env.REACT_APP_OPENWEATHER_ID

const instanceOpenWeather = axios.create({
   baseURL: 'https://api.openweathermap.org/',
});

export const weatherRequests = {
   getCoordinates: async (city: string) => {
      try {
         const request = await instanceOpenWeather.get(`geo/1.0/direct?q=${city}&limit=5&appid=${openWeatherId}`)
         if (request.data.length) {
            return request.data[0]
         }
         return 'City not found'
      } catch (error) {
         return 'Something was wrong'
      }
   },

   getWeather: async (coordinates: number[]) => {
      try {
         const request = await instanceOpenWeather.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&lang=ru&exclude=minutely,hourly,alerts&units=metric&appid=${openWeatherId}`)
         return request.data
      } catch (error) {
         return 'Error'
      }
   },
}
