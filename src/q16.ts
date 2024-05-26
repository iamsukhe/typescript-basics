// Add types to the isArray function so that it becomes identical to Array.isArray:
// Using type predicates
function isArray (a: any) : a is any[] { 
    return a instanceof Array 
}

// a is any[] is our type predicate in this example

function performSomeOperations(arr: any) {
    console.log(isArray(arr))
    if (!isArray(arr)) {
        throw new Error("Arr must be an array")
    }
    console.log(arr) // type of arr here must be an array
}

performSomeOperations([1])
