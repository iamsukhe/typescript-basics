// function mergeObjects(a: object, b: object) {
//     if (typeof a !== 'object' || typeof b !== 'object') {
//         throw new Error("a & b should both be objects")
//     }
//     return { ...a, ...b }
// }

type A26<T extends object> = T & { hello: "world" }
type b26 = A26<{ name: "sukhe" }>

function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
    if (typeof a !== 'object' || typeof b !== 'object') {
        throw new Error("a & b should both be objects")
    }
    return { ...a, ...b }
}




const a26 = mergeObjects({ name: "firstname" }, { lastName: "lastName" }) 
 