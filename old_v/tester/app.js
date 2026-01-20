const arr = [0 , "+", 7 , "*" , 2, "="];

/* const iteration = arr.map((value, index, array) => {
  console.log(value, "from tester arr");
  return value
});
 */
arr.pop()
let acumulador = eval(arr.join(""))

console.log(acumulador);

/* for (const element of arr) {
  if (typeof element === string) {
    
  } else {

  }
}
 */