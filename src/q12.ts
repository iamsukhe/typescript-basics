// I have a variable let x: string | null. When I try to do x.toLowerCase() typescript throws an error. But, I know that by the time I use x it will always have a valid string value. How do I inform typescript about the same?

let x: string | null;
x = null
// x.toLowerCase()
x!.toLowerCase()

function lowerCase(val: string | null) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
}

lowerCase(x)