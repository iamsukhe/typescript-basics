// You have the following type Course. Derive a new type PartialCourse which has all keys as optional. You can’t use the Partial utility type

type Course30 = {
    name: string
    uuid: string
    url?: string
    users: number
}   

type PartialCourse<T> = {
    [K in keyof T]?: T[K];
};


