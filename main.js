let a=[1,5,9,6,5];
let x;
console.log("original array :", a);
console.log("length of the array is "+a.length);
console.log("method : array.forEach()");
a.forEach(myfunction);
function myfunction(item) {
    x = item + 5; 
console.log("change in array :", x); }
console.log("return: length of array after forEach() is " +a.length);