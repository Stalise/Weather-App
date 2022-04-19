import { IWeatherDaily } from '../types/weatherTypes';
import { convertCelsius } from './changeDegreesHelper';

const typesWeatherBit = {
   sunny: ["Clear sky", "Mist", "Smoke", "Haze", "Sand/dust", "Fog", "Freezing Fog"],
   cloudy: ["Few clouds", "Scattered clouds", "Broken clouds"],
   overcast: ["Overcast clouds", "Thunderstorm with light drizzle", "Thunderstorm with drizzle", "Thunderstorm with heavy drizzle", "Thunderstorm with Hail"],
   rainy: ["Thunderstorm with light rain", "Thunderstorm with rain", "Thunderstorm with heavy rain", "Light Drizzle", "Drizzle", "Heavy Drizzle", "Light Rain", "Heavy rain", "Freezing rain", "Light shower rain", "Shower rain", "Heavy shower rain", "Moderate rain"],
   snowy: ["Light snow", "Snow", "Heavy Snow", "Mix snow/rain", "Sleet", "Heavy sleet", "Snow shower", "Heavy snow shower", "Flurries", "Mix snow\/rain"],
}

export const transformOpenWeather = (daily: any[], currentDegrees: string) => {

   let todayWeather = daily[0].weather[0].description

   switch (true) {
      case ["ясно"].includes(todayWeather):
         todayWeather = "sunny"
         break
      case ["облачно с прояснениями", "переменная облачность", "небольшая облачность"].includes(todayWeather):
         todayWeather = "cloudy"
         break
      case ["пасмурно"].includes(todayWeather):
         todayWeather = "overcast"
         break
      case ["небольшой дождь", "дождь", "сильный дождь", "Heavy rain"].includes(todayWeather):
         todayWeather = "rainy"
         break
      case ["снег с дождём", "снег"].includes(todayWeather):
         todayWeather = "snowy"
         break
      default:
         todayWeather = ''
         break
   }

   const getWeekDay = (dt: number): string => {
      return new Date(dt * 1000).toLocaleString('en', { weekday: 'short' });
   }

   let newDaily: IWeatherDaily[] = daily.map((elem) => {
      return (
         {
            temp: Math.round(elem.temp.day),
            icon: `http://openweathermap.org/img/w/${elem.weather[0].icon}.png`,
            day: getWeekDay(elem.dt),
         }
      )
   })

   if (currentDegrees === '°F') {
      newDaily = convertCelsius(newDaily)
   }

   return { newDaily, todayWeather }

}

export const transformWeatherBit = (daily: any[], currentDegrees: string) => {

   let todayWeather = daily[0].weather.description

   switch (true) {
      case typesWeatherBit.sunny.includes(todayWeather):
         todayWeather = "sunny"
         break
      case typesWeatherBit.cloudy.includes(todayWeather):
         todayWeather = "cloudy"
         break
      case typesWeatherBit.overcast.includes(todayWeather):
         todayWeather = "overcast"
         break
      case typesWeatherBit.rainy.includes(todayWeather):
         todayWeather = "rainy"
         break
      case typesWeatherBit.snowy.includes(todayWeather):
         todayWeather = "snowy"
         break
      default:
         todayWeather = ""
         break
   }

   const getWeekDay = (datetime: string): string => {
      return new Date(datetime).toLocaleString('en', { weekday: 'short' });
   }

   let newDaily: IWeatherDaily[] = daily.map((elem) => {
      return (
         {
            temp: Math.round(elem.temp),
            icon: `https://www.weatherbit.io/static/img/icons/${elem.weather.icon}.png`,
            day: getWeekDay(elem.datetime),
         }
      )
   })

   if (currentDegrees === '°F') {
      newDaily = convertCelsius(newDaily)
   }

   return { newDaily, todayWeather }

}
