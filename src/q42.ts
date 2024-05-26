const a42 = 1
// a42.print() 

interface Number {
    print(): void;
  }

Number.prototype.print = function() {
   console.log(this)
}

a42.print()