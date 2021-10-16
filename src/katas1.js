function oneThroughTwenty() {
  let numeros = [];
  for (let index = 1; index <= 20; index++){
    numeros.push(index)
  }
  return numeros;    
}
console.log (oneThroughTwenty())

// //call function oneThroughTwenty

function evensToTwenty() {
  let numeros = [];
  for (let index = 1; index <= 20; index++){
      if (index % 2 == 0)
      numeros.push(index)
  }
  return numeros
}
console.log (evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
  let numeros = [];
  for (let index = 1; index <= 20; index+=2){
      numeros.push(index)
  }
  return numeros;   
}
console.log (oddsToTwenty())

// //call function oddsToTwenty

function multiplesOfFive() {
  let numeros = [];
  for (let index = 5; index <= 100; index+=5){
      numeros.push(index)
  }
  return numeros;   
}
console.log (multiplesOfFive())

// //call function multiplesOfFive

function squareNumbers() {
  let numeros = [];
  for (let index = 1; index <= 10 ; index++){
      numeros.push(index * index)
  }
  return numeros;      
}
console.log (squareNumbers())

// //call function squareNumbers

function countingBackwards() {
  let numeros = [];
  for (let index = 20; index >= 1; index--){
      numeros.push(index)
  }
  return numeros;   
}
console.log (countingBackwards())

// //call function countingBackwards

function evenNumbersBackwards() {
  let numeros = [];
  for (let index = 20; index >= 1 ; index-=2){
      numeros.push(index)
  }
  return numeros;   
}
console.log (evenNumbersBackwards())

function oddNumbersBackwards() {
  let numeros = [];
  for (let index = 20; index >= 1; index--){
    if (index % 2 > 0)
    numeros.push(index)
  }
  return numeros;   
}
console.log (oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let numeros = [];
  for (let index = 100; index >= 1 ; index-=5){
    numeros.push(index)
  }
  return numeros;   
}
console.log (multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let numeros = [];
  for (let index = 10; index >= 1 ; index--){
    numeros.push(index * index)
  }
  return numeros;   
}
console.log (squareNumbersBackwards())

//call function squareNumbersBackwards
