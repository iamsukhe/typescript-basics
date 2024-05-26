type Point = {
    x?: number
    readonly y: number
}

// type ReadonlyPoint = {
//     [loop]: ouput
// }

type Mapped1 = {
    readonly [key in keyof Point]?: Point[key]
}

type Mapped2 = {
    +readonly [key in keyof Point]+?: Point[key]
}

type Mapped3 = {
    -readonly [key in keyof Point]-?: Point[key]
}