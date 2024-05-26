
// Typescript type cheatsheet
// TypeScript is a structural type system (not a nominal one)
// quacks like a duck it is a duck — if the props are the same, the types are considered the same
// interfaces are automatically implemented if thing has matching properties

enum Bar { Red, Green, Blue }
enum Bar2 { Red = 2, Green, Blue }

interface Foo {
    // primitive
    n: number;
    readonly b: boolean; // can't be modified after object creation
    b2: Readonly<boolean>;
    s?: string; // ? means optional
    sy: symbol; // immutable and unique
    [propName: string]: any; //  allow extra properties "string index signature":
    // non-primitive
    d: Date;
    foo(x: number): void; // function foo
    bar(f: Foo): number; // recursion allowed
    o: object;
    a: Array<number>;
    a2: number[]; // alt. array syntax
    t: [string, number]; // tuple
    e: Bar; // index starts at 0
    e2: Bar2; // index starts at 2
    an: any; // dynamic content
    u: unknown; // type-safe counter part to any, must first assert type
    nu: null;
    un: undefined;
    v: void; // returns undefined
    ne: never; // never returns, only throws
}
// Functions
interface Func {
    (a: number, b2: number): number; // names do not need to match
}
let addy: Func
addy = (a, b) => a + b;
const mult2 = (a: number, b: any): number => a * b;
const mult = (a: number, b: unknown): number => a * (b as number); // must assert b

let myAdd: (a: number, y: number) => number; // different name 'a' is ok
myAdd = function (x: number, y: number): number { return x + y; };
myAdd = (x: number, y: number): number => x + y;

// Returns undefined
function divide(a: number, b: number): void {
    a / b;
}

// will never return - always throws an error
function divide2(a: number, b: number): never {
    a / b;
    throw EvalError
}

const foo = (a: number, b?: number): void => {
    console.log(b + a); // Object possibly undefined with strictNullChecks
}

const foo2 = (a: number, b = 12): void => {
    console.log(b + a); // if b is undefined, use the default value 12
}

const foo3 = (uno: number, ...restParams: number[]): number => uno + restParams.reduce((c, p) => c + p, 0);
foo3(1, 2, 3) // 6




interface Stringys {
    [i: number]: string
}
const ss: Stringys = ["1", "2", "three"]
const ss2: string[] = ["1", "YES", "three"]
ss.map(s => s + "!") // ERROR Stringys would not have map

// Readonly
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // ERROR


/*
Utility Types — Construct types from types!
https://www.typescriptlang.org/docs/handbook/utility-types.html
Partial<T>      constructs type with all properties of T set to optional
Readonly<T>     constructs type with all properties of T set to read only
Record<K,T>     constructs type with properties K of type T
Pick<T,K>       constructs type with properties K from T
Omit<T,K>       constructs type with properties T then removing K
Exclude<T,U>    example: type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
Extract<T,U>    example: type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
NonNullable<T>  example: type T0 = Extract<string[] | null | undefined>;  // string[]
ReturnType<T>   example: type T0 = ReturnType<() => string>;  // string
InstanceType<T> constructs type of instance type of constructor function T
Required<T>     constructs type with T turning all optionals to required
ThisType<T>     https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypet
 */


//  Classes! a class has two types: 
//      the type of the static side and the type of the instance side.
//  http://www.typescriptlang.org/docs/handbook/interfaces.html#class-types

interface Classy {
    foo(): void;
    p?: number;
}

interface MoreClassy extends Classy {
    more: string
}

class SuperClass implements MoreClassy {
    foo() { }
    // p = 1
    more = "stuff"
    thing = "" // implicitly public
    private special = true
    constructor(thing: string) {
        this.thing = thing;
        console.log(thing);
        this.special = false
    }
}

// procted v. private — protected can be used in child classes, private cannot
class BaseClass extends SuperClass {
    // has stuff from MyClass
    more = "override"
    protected propThing = false; // ok in subclass
    private otherThing_ = false; // not ok in subclass
    readonly thingy = false; // immutable after initiialization
    static zero = 0 // not available to instance, only the class
    constructor(readonly t: string) { // parameter property set in one place, works with protected, private, etc.
        super(t) // calls constructor of super class
        this.special = true // ERROR: only accessible in super class
        BaseClass.zero // static property on this class
    }

    // Accessors: Getters and setters (are readonly by default)
    // Must set compiler to output ECMAScript 5 or higher
    get bar(): string {
        return this.more
    }

    set otherThing(newOtherThing: boolean) {
        if (!newOtherThing) {
            throw new Error("Must be true!")
        }
        this.otherThing_ = newOtherThing;
    }
}

const b1 = new BaseClass("that").special // ERROR: only accessible in super class
const b2 = new BaseClass("that").propThing // ERROR: only accessible in class and by children classes
const b3 = new BaseClass("that").otherThing // ERROR only accessible in class
let b4 = new BaseClass("that").thingy // can be read
let b = new BaseClass("that")
b.thingy = "updated" // ERROR: cannot be updated

class ProtectedThing {
    protected constructor() { }
}

let p = new ProtectedThing() // ERROR the constructor is protected and only accesible in the class

// Extend interfaces

interface A {
    a: boolean
}

interface B {
    b: boolean
}

interface ABC extends A, B {
    c: boolean
}

/*
When an interface type extends a class type it inherits the members 
of the class but not their implementations.
*/

class Silly {
    private state: any;
}

interface Absurd extends Silly {
    j: number
}

class What extends Silly implements Absurd {
    j = 1
}

// Abstract classes may not be instantiated directly

abstract class Foo {
    abstract thing(): void // must be implemented in derived classes
}

let f = new Foo() // ERROR: Cannot create instance of an abstract class
class FooBoo extends Foo {
    thing() {
        console.log("I must implement this abstract method from super class")
    }
}

// GENERICS
// this is differen from using "any"
// here we say - the type of the returned value 
// will match the type of the argument
// This function is "generic" — it works over a range of types
function identity<T>(arg: T): T {
    return arg;
}
let out: string = identity<number>(4) // ERROR — number not assignable to tupe string
let out2: string = identity(4) // ERROR — number not assignable to tupe string
let out3 = identity<string>((4 as unknown) as string) // Type casting
let infer = identity(4) // Use type argument inference

function log<T>(arg: T): T {
    return arg.length; // ERROR: Property length does not exist on type T
}

function log2<T>(arg: T[]): number {
    return arg.length; // Fixed!
}