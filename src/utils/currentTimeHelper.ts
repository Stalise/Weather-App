export const currentTimeHelper = (): number => {

   let currentTime: any = new Date()

   currentTime = Date.parse(currentTime)

   return currentTime
}
