type MyArray<T> = {
    items: T[]
}

const a27: MyArray<string> = { items: ["a", "b", "c"] }
const b27: MyArray<number> = { items: [1,2,3] }

// a27: MyArray < string > = { items: ["a", "b", "c"] }
// b27: MyArray<number> = { items: [1,2,3] }
