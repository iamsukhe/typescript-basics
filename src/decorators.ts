 function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(this: any, ...args: any[]) {
        console.log("start:", propertyKey);
        const result = originalMethod.apply(this, args);
        console.log("end:", propertyKey);
        return result;
    };

    
    console.log(descriptor);
    
    return descriptor;
}
 function logger2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(this: any, ...args: any[]) {
        console.log("start:", propertyKey);
        const result = originalMethod.apply(this, args);
        console.log("end:", propertyKey);
        return result;
    };


    return descriptor;
}

  
function column() {
    return function(target: any, propertyKey: string) {
        // Optionally, you can do something with target and propertyKey here
        // For example, you can store metadata about the decorated properties
        
        // Define or modify the property descriptor
        const descriptor: PropertyDescriptor = {
            // You can define or modify the behavior of the property here
            // For example, you can add getters/setters or change property values
            // For simplicity, let's just log the property name when accessed
            get: function(this: any) {
                console.log(`Accessed property ${propertyKey}`);
                // Return the actual property value
                return this[`_${propertyKey}`];
            },
            set: function(this: any, value: any) {
                console.log(`Setting property ${propertyKey} to ${value}`);
                this[`_${propertyKey}`] = value;
            },
            enumerable: true,
            configurable: true
        };

        console.log(target);
        
        // Define the property using the modified descriptor
        Object.defineProperty(target, propertyKey, descriptor);
    };
}

class UserClass {
    @column()
    name: string;

    @column()
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
  
    @logger
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    @logger
    printAge() {
      console.log(`I am ${this.age} years old`);
    }
  }
  

  const user = new UserClass("John", 30);

  user.greet()
//   console.log(user); // Accessed property name, John
//   console.log(user['name']); // Accessed property name, John
//   console.log(user.age); // Accessed property age, 30
  
//   user.name = "Alice"; // Setting property name to Alice
//   console.log(user.name); // Accessed property name, Alice

