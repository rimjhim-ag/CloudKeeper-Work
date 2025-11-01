// 1. Convert to Arrow Function


function add(a,b){
    return a +b;
}



var add = (a,b) =>{
    return  a+b;
}


console.log(add(1,2));



// 2. Default Parameters


function greet(name , message = "Welcome!"){
      console.log(`${name}  ${message}`);
}


greet("rimjhim");
greet("rimjhim" , "Hi");



// 3. Template Literals


function formatString(name,age){

    console.log(`Hello, my name is ${name} and I am ${age} years old.`)
}

formatString("rimjhim", 21);



// 4. Object Destructuring
const person = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'New York',
        country: 'NY'
    }
};

function extractAddress(){

    const {name, address, address:{city, country}} = person;


    console.log(`${name} lives in ${city}`);

  

    console.log(address);
}

extractAddress();


// 5. Rest Operator

console.log(sumAll(1,2,3,4,5,6,7));

function sumAll(...args){
        var sum  = 0;

    for(let i=0;i<args.length;i++){
           sum += args[i];

    }

    return sum;
}


// 6. Filter Even Numbers


var arr = [1,2,3,4,5,6];

var result = arr.filter((e) =>
     { if(e%2 === 0)  
        return true;
    })

console.log(result);


// 7. Array Mapping

// Write a function doubleValues that takes an array of 
// numbers and returns a new array where each number 
// is doubled. Use the map method.
// Example:
// doubleValues([1, 2, 3]); // Output: [2, 4, 6]


var arr1 = [1,2,3,4,5,6];

function doubleValues(arr){
    const result =  arr.map((e) => e*2);


    console.log(result);
}

doubleValues(arr1);






// 8. Find the Maximum

// Write a function findMax that takes an array of
//  numbers and returns the largest number in the 
// array. Use the spread operator.
// Example:
// findMax([3, 5, 7, 2, 8]); // Output: 8

var arr2 = [1,2,3,4,5,6];
findMax(arr2);

function findMax(arr){


  
         const maxVal =  Math.max.call(null, ...arr);



         console.log(maxVal);
    


}


// 9. Object and Array Destructuring
// Given the following data:
// const data =[
//   {
//     name: "Bob",
//     age: 24
//   },
//   {
//     name: "Alice",
//     age: 21
//   }
// ]

// Write a function that extracts the age as  “24” 
//  and name as “Alice” and returns a sentence: "Alice’s age is 24."


const data =[
  {
    name: "Bob",
    age: 24
  },
  {
    name: "Alice",
    age: 21
  }
]



function ext(){
      
    var Extage;
    var Extname;


    
          
   var [obj1, obj2] = data;

   Extage = obj1.age;
   Extname = obj2.name;

   return `${Extname}'s age is ${Extage}`;
     
}


console.log(ext());


// 10. Data Manipulation using Array functions
// Write a function that manipulates data in such a way that it returns an array of objects again but with the selected keys only.
// Input:
// [{
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
// }]

// Output: 

// [{
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "rate": 3.9,
// "count": 120
// }]





function getSelectedKeys(input, ...selectedKeys) {

  function findKeys(obj, result) {
    for (let key in obj) {
      const value = obj[key];
      
      if (selectedKeys.includes(key)) {
        result[key] = value;
      }

    
      if (typeof value === "object") {
        findKeys(value, result);
      }
    }
  }

 
  return input.map(obj => {
    const newObj = {};
    findKeys(obj, newObj);
    return newObj;
  });
}








// 11. Default Parameter
//  const fun = (name = "abc") => {
//         if (name) {
//           console.log("if", name);
//         } else {
//           console.log("else", name);
//         }
//       };
	  
// fun(""); 
// Output ?



// else block will be executed and logged



// 12. Deep Clone Objects
// Write a function deepClone that creates a deep copy of a given object. Ensure that nested objects and arrays are properly cloned without retaining references to the original object.

const exampleObj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(exampleObj);

clonedObj.b.c = 42;
console.log(clonedObj);
console.log(exampleObj.b.c); 


function deepClone(obj){

  
       let clonedobj ={};
    for(var key in obj){
        
         if(typeof obj[key] !== "object"){
         
            clonedobj[key] = obj[key];
            
         }else{

              
              clonedobj[key] = deepClone(obj[key]);
         }
    }


    return clonedobj;

     
  
}




// 13. Flatten Nested Arrays
// Write a function flattenArray that takes a nested array and returns a flattened array. Use recursion and/or ES6 methods to solve this problem.
// Example:
// flattenArray([1, [2, [3, [4, 5]]]]); 

var newArr = [];
console.log(flattenArray([1, [2, [3, [4, 5]]]]));

function flattenArray(nestedArr){
      
    


 


    for(let i=0;i<nestedArr.length;i++){

          
         if(!Array.isArray(nestedArr[i])){
        newArr.push(nestedArr[i]);}

         else{
            flattenArray(nestedArr[i]);
         }
    }

    return newArr;
}



























