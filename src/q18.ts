const a18 = 1

if (typeof a18 === 'string') {
    // a18 is not a string 
    // "a18" can't occur here, so it's type "never"
    console.log(a18) // What is the type of `a` here?
}

// The never type is used when you are sure that something is never going to occur.
// For example, you write a function which will not return to its end point or always throws an exception.