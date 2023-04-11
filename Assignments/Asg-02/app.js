// //Question-1
// //Write a function that creates a closure and returns a function that can add
// //a specific number to any number passed to it. For example, if the closure is
// //created with 5, the returned function should add 5 to any number passed to it.
// function createClosure(num) {
//     return function(n) { //Function
//       return n + num;
//     }
//   }
//   const add5 = createClosure(5);
//   //Examples
//   console.log(add5(5));  // Output: 10
//   console.log(add5(10)); // Output: 15
//   console.log(add5(15)); // Output: 20
//   console.log(add5(20)); // Output: 25

/************************************************************************/
// //Question-2
// //Write a recursive function that searches an array for a specific value. The
// //function should return true if the value is found, and false if it is not. You
// //can assume that the array is not nested.
// function search(array1, value) {
//     if (array1.length === 0) {
//       return false; // Base case: value not found
//     } else if (array1[0] === value) {
//       return true; // Base case: value found
//     } else {
//       return search(array1.slice(1), value); // Recursive case: continue searching
//     }
//   }
//   // Examples
//   const myArray = [2, 4, 6, 8, 10, 12, 14];
//   console.log(search(myArray, 1)); // Output: False
//   console.log(search(myArray, 12)); // Output: True
//   console.log(search(myArray, 3)); // Output: False
//   console.log(search(myArray, 6)); // Output: True

/********************************************************************/
//Question-3
//Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element
// function addParagraph(text) {
//   const newParagraph = document.createElement("p");
//   newParagraph.textContent = text;
//   document.body.appendChild(newParagraph);
// }
// // Example:
// addParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque placerat ac nisl ac feugiat. Sed eu accumsan mauris.");

/********************************************************************/
// //Question-4
// //Write a function that adds a new list item to an unordered list in an HTML
// //document. The function should take a string argument that will be used as
// //the text content of the new list item.
// const myPara = (messages) => {
//     const addNewPara = document.createElement("p");
//     addNewPara.textContent = messages;
//     document.body.appendChild(addNewPara);
//   };
//   myPara(
//     "Lorem Ipsum is dommmmmm simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//   );

/********************************************************************/
// //Question-5
// //Write a function that changes the background color of an HTML element. The function should take two arguments: 
// //the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.
// // //Code-1 
// // function changeBgColor(element, color) {
// //     if (element != null) {
// //       element.style.backgroundColor = color;
// //     }
// //   }
// //   // Example:
// //   const myElement = document.getElementById("my-element");
// //   changeBgColor(myElement, "aqua");

// //Code-2
// function changeBgColor(element, newColor) {
//     element.style.backgroundColor = newColor;
//   }
  
//   // Example usage:
//   const myElement = document.getElementById("my-element");
//   changeBgColor(myElement, "red");
  
/********************************************************************/
// //Question-6
// //Write a function that saves an object to localStorage. The function should take two arguments: the first argument
// // is a string representing the key to use for storing the object, and the second argument is the object to store.
// function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }
//   // Example:
//   const myObj = { name: "Muneeba", age: 24 };
//   saveObjectToLocalStorage("my-object", myObj);
//   //Eg-2
//   const myObj1 = { name: "Rashid", age: 50 };
//   saveObjectToLocalStorage("my-object", myObj1);
  
/********************************************************************/
//Question-6
//Write