class Shape {
    public name?: string
}
class Square extends Shape {
    public l?: number
    public b?: number
    public name: "square" = "square"
}

class Circle extends Shape {
    public radius?: number
    public name: "circle" = "circle"
}

let a15: Shape

a15 = new Square()
if(a15 instanceof Square){
    console.log(a15.l) // Error: Property 'l' does not exist on type 'Shape'.
}

a15 = new Circle()
console.log((a15 as Circle).radius) // Error: Property 'radius' does not exist on type 'Shape'.