// // Function Execution Context

// let x = 1;

// function test() {
//     var x = 2;
// }

// test();
// console.log(x);






// console.log("x before", x);
// var x = 1;
// console.log("x after", x);


// function test() {
//   console.log("x in function before change",x);
//   x = 2;
//   console.log("x in function after change",x);
// }
//   console.log("x before function execution",x);
// test();
//   console.log("x after function execution",x);


var a = 5;

function test() {
    a = 10;
  console.log(a);
}


test();
console.log(a);







// const sayHello = () => {
//     console.log("Hello");
//     sayHello();
// }