// 13. I have a variable`let x: string | string[]`.Write code to achieve the following:
// 1. If `x` is an array then iterate over all the elements using `forEach` function & print their values
// 2. otherwise throw an error.
//     3. You can’t use Array.isArray helper function.

let x13: string | string[]

x13 = ['x','b'];

// using function
function printAll(strs: string | string[] | {} | null) {
    if (strs instanceof Array) {
        strs.forEach((s: string) => {
            console.log(s);
        })
    } else {
        throw new Error("Type does not work")
    }
}


if (x13.constructor === Array) {
    x13.forEach((s: string) => {
        console.log(s);
    })
} else {
    throw new Error("Type does not work")
}