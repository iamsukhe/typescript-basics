type User38 = {
    name: string
    age: number
    getName: () => string
    getAge: () => number
}

type getValue<T> = {
    [P in keyof T]:  T[P] ;
}[keyof T];

type returnValue = getValue<User38>
