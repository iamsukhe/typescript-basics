type Helpers35 = {
    getName: () => string
    getAge: () => number
}

type ReturnType35<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type HelperReturnTypes35  = {
    [K in keyof Helpers]: ReturnType35<Helpers35[K]>;
};


let a35: HelperReturnTypes35 =  {
    getName: 'string',
    getAge: 1
}