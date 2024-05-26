class Additione {
    public static sum(a: number, b: number) {
            return a + b
    }

    constructor(private a:number) {}

    public add(b: number) {
            this.a += b
            return this.a
    }
}

interface ClassType {
    sum(a: number, b: number) :number
    new (a:number) : {
        add(b: number) :number
    }
}


type ClassTypeAlias =  {
    sum(a: number, b: number) :number
    new (a:number) : {
        add(b: number) :number
    }
};

const myClass: ClassTypeAlias = Additione

let obj = new myClass(5)