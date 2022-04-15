interface IUserCurrentDay {
   seconds: number,
   nanoseconds: number,
}

interface IUserTodo {
   time: string,
   text: string,
   todoId: string,
}

export interface IUserFirebase {
   userEmail: string,
   currentDay: IUserCurrentDay,
   todos: IUserTodo[]
}
