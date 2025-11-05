const myFunc = (argument) => {
  return "Hello World! - " + argument;
}

const iLikeToReturnFunc = (argument) => {
  return myFunc(argument);
}

console.log(iLikeToReturnFunc("Mike"));