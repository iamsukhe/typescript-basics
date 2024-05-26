type User36 = {
    name: string
    age: number
    getName: () => string
    getAge: () => number
    getNumber: (a: number, b: number) => number
}

type KeysOfType<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

type returnKeys = KeysOfType<User36,(...args: any) => any>

type returnType = Pick<User36,returnKeys>

// TODO: Make only one type

type customPick<T, U> = Pick<T,{
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T]>

type test = customPick<User36,(...args: any) => any>