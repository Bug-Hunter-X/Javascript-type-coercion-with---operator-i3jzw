function foo(a,b){
  //Explicit type conversion before using the + operator
  return Number(a) + Number(b);
}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //5
console.log(foo("2",3)); //5
console.log(foo("2","3")); //5