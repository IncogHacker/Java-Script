class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// ❌ Cannot call on object
const obj = new MathUtils();
// obj.add(2, 3); // ❌ Error

// ✅ Call directly on class  means class call itself not help with the object called static
console.log(MathUtils.add(2, 3));      // Output: 5
console.log(MathUtils.multiply(4, 2)); // Output: 8


// Instance Method	object.method()     	Yes (refers to object)
// Static Method	Class.method()        	No (this is the class)

// A static method belongs to the class itself, not to any object (instance) created from the class.