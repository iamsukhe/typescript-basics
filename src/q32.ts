type Course32 = {
    name: string
    uuid: string
    url?: string
    users: number
}

type snakeCase<T> = {
    [K in keyof T  & string as `user_${K}`]: T[K];
};