const myFunc = (argument) => {
  return "Hello World! - " + argument;
}

const iLikeToReturnFunc = (argument) => {
  return myFunc(argument);
}

// A different comment

console.log(iLikeToReturnFunc("Mike"));