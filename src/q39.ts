// type Exclude<T, U> = T extends U ? never : T;


type User39 = {
    name: string
    age: number
    getName: () => string
    getAge: () => number
}

type getValue39<T, U> = {
    [P in keyof T]:  T[P] extends U? never : T[P]
}[keyof T];

type returnValue39 = getValue39<User38,(...args: any) => any>