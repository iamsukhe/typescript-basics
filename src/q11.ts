let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
Symbol('foo') === Symbol('foo')  // false

// Symbol is a built-in object whose constructor returns a symbol primitive
// also called a Symbol value or just a Symbol — that's guaranteed to be unique.