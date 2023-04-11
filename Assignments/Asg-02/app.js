//Question-1
//Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed to it.
function createClosure(num) {
    return function(n) { //Function
      return n + num;
    }
  }
  const add5 = createClosure(5);
  //Example
  console.log(add5(5));  // Output: 10
  console.log(add5(10)); // Output: 15
  console.log(add5(15)); // Output: 20
  console.log(add5(20)); // Output: 25