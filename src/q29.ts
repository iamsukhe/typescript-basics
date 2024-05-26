function createSimpleMemoryDatabase<T>(){
    return class SimpleMemoryDatabase{
        private db : Record<string,T> = {}

        set(id:string,value:T){
            this.db[id] = value
        }
        get(id: string): T{
            return this.db[id] 
        }
        getObject(id: string): object{
            return this.db
        }
    }
}

const stringDatabase = createSimpleMemoryDatabase<string>()

const stb1 = new stringDatabase()
stb1.set("a","hello")

class GenericNumber<T> {
    items: T[] = [] 
}


const a29: GenericNumber<string> = { items: ["a", "b", "c"] }
const b29: GenericNumber<number> = { items: [1,2,3] }
