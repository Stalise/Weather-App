export const transformDaysWeather = (daily: any[]) => {
   console.log(daily)
   const newDaily = daily.map((elem) => {
      return (
         {
            temp: Math.round(elem.temp.day),
            icon: elem.weather[0].icon,
         }
      )
   })

   return newDaily

}
