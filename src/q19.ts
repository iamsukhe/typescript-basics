// 19. Make a function `makeName` which takes`name` as argument and then returns`{ name: <value of name>}`.Type the function in a way so that when executing`const x = makeName("Chirag")`, x’s type is `{ name: "Chirag" }`

function makeName<T extends string>(name: T){
    return { name }
}

const x19 = makeName("chirag")