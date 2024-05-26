type HelperReturnTypes36 = {
    getName: string
    getAge: number
}

type Helpers36  = {
    [K in keyof HelperReturnTypes36]: () => HelperReturnTypes36[K] 
};

