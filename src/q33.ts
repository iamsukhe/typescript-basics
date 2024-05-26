type Course33 = {
    name: string
    uuid: string
    url?: string
    users: number
}

type upperCase<T> = {
    [K in keyof T  & string as `User${Capitalize<string & K>}`]: T[K];
};