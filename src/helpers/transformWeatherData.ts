import { IWeatherDaily } from '../types/weatherTypes';

const typesWeatherBit = {
   sunny: ["Clear sky", "Mist", "Smoke", "Haze", "Sand/dust", "Fog", "Freezing Fog"],
   cloudy: ["Few clouds", "Scattered clouds", "Broken clouds"],
   overcast: ["Overcast clouds", "Thunderstorm with light drizzle", "Thunderstorm with drizzle", "Thunderstorm with heavy drizzle", "Thunderstorm with Hail"],
   rainy: ["Thunderstorm with light rain", "Thunderstorm with rain", "Thunderstorm with heavy rain", "Light Drizzle", "Drizzle", "Heavy Drizzle", "Light Rain", "Moderate Rain", "Heavy Rain", "Freezing rain", "Light shower rain", "Shower rain", "Heavy shower rain"],
   snowy: ["Light snow", "Snow", "Heavy Snow", "Mix snow/rain", "Sleet", "Heavy sleet", "Snow shower", "Heavy snow shower", "Flurries"],
}

export const transformOpenWeather = (daily: any[]) => {

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
      case ["небольшой дождь", "дождь", "сильный дождь"].includes(todayWeather):
         todayWeather = "rainy"
         break
      case ["снег с дождём", "снег"].includes(todayWeather):
         todayWeather = "snowy"
         break
      default:
         todayWeather = ""
         break
   }

   const getWeekDay = (dt: number) => {
      return new Date(dt * 1000).toLocaleString('en', { weekday: 'short' });
   }

   const newDaily: IWeatherDaily[] = daily.map((elem) => {
      return (
         {
            temp: Math.round(elem.temp.day),
            icon: `http://openweathermap.org/img/w/${elem.weather[0].icon}.png`,
            day: getWeekDay(elem.dt),
         }
      )
   })

   return { newDaily, todayWeather }

}

export const transformWeatherBit = (daily: any[]) => {

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
         todayWeather = "snow"
         break
      default:
         todayWeather = ""
         break
   }

   const getWeekDay = (datetime: string) => {
      return new Date(datetime).toLocaleString('en', { weekday: 'short' });
   }

   const newDaily: IWeatherDaily[] = daily.map((elem) => {
      return (
         {
            temp: Math.round(elem.temp),
            icon: `https://www.weatherbit.io/static/img/icons/${elem.weather.icon}.png`,
            day: getWeekDay(elem.datetime),
         }
      )
   })

   return { newDaily, todayWeather }

}
