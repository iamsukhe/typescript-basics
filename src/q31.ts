// Using the type Course from question30, derive a new ReadonlyCourse type where all keys are readonly. You can’t use the ReadOnly utility type

type Course31 = {
    name: string
    uuid: string
    url?: string
    users: number
}    

type ReadonlyCourse<T> = {
    readonly [K in keyof T]: T[K];
};


let b30:ReadonlyCourse<Course30> = {
    name: "string",
    uuid: "string",
    url: "string",
    users: 1
}
 
b30.name = "30" // Error beacause of readonly

