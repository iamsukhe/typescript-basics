type User40 = {
    name: string
    age: number
    getName: () => string
    getAge: () => number
}

const user40:User40 = {
    name: 'string',
    age: 1,
    getName: () => 'string',
    getAge: () => 1
}

function returnValue<T extends keyof User40>(key:T){
    return user40[key]
}

const a40 = returnValue('age')