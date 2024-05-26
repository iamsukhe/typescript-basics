function iterateObject<T extends object>(obj:T,callback:(key:keyof T,value:T[keyof T])=>void) {
    for(const a in obj){
        callback(a,obj[a])
    }   
}

type Obj = { name: "singh", age: 10}

iterateObject( { name: "singh", age: 10}as Obj, (key,value)=>{ 
    console.log(key)
    console.log(value)
})

// { hello: "world", world: "hello" }
