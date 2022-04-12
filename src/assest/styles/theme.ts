interface IWeatherType {
   wrapperBackground: string,
   containerBackground: string,
}

interface IState {
   [key: string]: IWeatherType,
}

export const myThemes: IState = {
   sunny: {
      wrapperBackground: `url('./images/sunny_blur.jpg') 0 0/100% 100% no-repeat`,
      containerBackground: `url('./images/sunny.jpg') 0 0/cover no-repeat`,
   },
   cloudy: {
      wrapperBackground: `url('./images/cloudy_blur.jpg') 0 0/100% 100% no-repeat`,
      containerBackground: `url('./images/cloudy.jpg') 0 0/cover no-repeat`,
   },
   rainy: {
      wrapperBackground: `url('./images/rainy_blur.jpg') 0 0/100% 100% no-repeat`,
      containerBackground: `url('./images/rainy.jpg') 0 0/cover no-repeat`,
   },
   snowy: {
      wrapperBackground: `url('./images/snowy_blur.jpg') 0 0/100% 100% no-repeat`,
      containerBackground: `url('./images/snowy.jpg') 0 0/cover no-repeat`,
   },
   overcast: {
      wrapperBackground: `url('./images/overcast_blur.jpg') 0 0/100% 100% no-repeat`,
      containerBackground: `url('./images/overcast.jpg') 0 0/cover no-repeat`,
   },
   '': {
      wrapperBackground: `url('./images/sunny_blur.jpg') 0 0/100% 100% no-repeat`,
      containerBackground: `url('./images/sunny.jpg') 0 0/cover no-repeat`,
   },
}
