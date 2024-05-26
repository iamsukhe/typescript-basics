class Disposable {
    isDisposed: boolean = true
}

class Activatable {
    isActive: boolean = true
}

type Class = new (...args: any[]) => any;


function DisposableMixin<Base extends Class>(base: Base){
    return class extends base{ 
        public id: number = 1
        public name: string = "any"
    }
}

function ActivatableMixin<Base extends Class>(base: Base){
    return class extends base{
        isActive: boolean = true
    }
}

const ExampleClass = ActivatableMixin(DisposableMixin(Disposable))

// Create ExampleClass type

type ExampleClass = InstanceType<typeof ExampleClass>

const ExampleObject = new ExampleClass()