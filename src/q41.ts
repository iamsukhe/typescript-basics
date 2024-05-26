type User41 = {
    name: string
    age: number
    getName: () => string
    getAge: () => number
}

type KeysOfType41<T,U> = {
    [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];

type returnKeys41 = KeysOfType41<User41,(...args: any) => any>

const user41:User40 = {
    name: 'string',
    age: 1,
    getName: () => 'string',
    getAge: () => 1
}

function returnValue41<T extends returnKeys41>(key:T){
    return user41[key]
}


const a41 = returnValue41('age')