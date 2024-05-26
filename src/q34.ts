// You have the following type Helpers. Derive a new type HelperReturnTypes which has return types of all the helpers.

type Helpers = {
    getName: () => string
    getAge: () => number
}

type HelperReturnTypes  = {
    [K in keyof Helpers]: ReturnType<Helpers[K]>;
};

let a34: HelperReturnTypes =  {
    getName: 'string',
    getAge: 1
}