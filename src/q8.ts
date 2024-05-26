interface Animal {
    hands: number
    legs: number
    species: string
}

interface Dog extends Animal {
    species: 'dog'
}

interface Cat extends Animal {
    species: 'cat'
}

function getAnimal(type: 'dog' | 'cat'): Animal {
    return {
        species: type,
        legs: 2,
        hands: 2,
    }
}

const dog: Dog = getAnimal("dog") as Dog; // Error: Type 'Animal' is not assignable to type 'Dog'.

console.log(dog)