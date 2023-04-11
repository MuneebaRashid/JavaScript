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
//Question-4
//Write a function that adds a new list item to an unordered list in an HTML
//document. The function should take a string argument that will be used as
//the text content of the new list item.
function addItemInList(text) {
    const newItemInList = document.createElement("li");
    newItemInList.textContent = text;
    const unorderedList = document.querySelector("ul");
    if (unorderedList) {
        unorderedList.appendChild(newItemInList);
      } else {
        console.error("No unordered list found");
      }
    }
  // Example:
  addItemInList("This is a new list item!");
  
