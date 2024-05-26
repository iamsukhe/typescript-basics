let record: Record<string, number> = {
    a: 5,
    b: 5
}

record.b = 6

console.log(record.n);

let object: object = {
    a: 5,
    b: 6
}


console.log(object);


// On an object of type object however, the keys are not assumed to be any. As with Record<any, ...>, TypeScript does not know which keys actually exist, but it will not allow to access any keys:
