type Person = {
    name: string
    age: string
    location: string
}

type Personkeys = keyof Person

let key: Personkeys = "name"