// * `scuberGreetingForFeet()` — Use `if` and `else if` statements to return the
// correct greeting based on the distance the passenger desires to travel.
function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    return "This one is on me!";
  } else if (rideLength > 2000 && rideLength <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (rideLength > 2500) {
    return "No can do.";
  }
}
scuberGreetingForFeet(300);

// * `ternaryCheckCity()` — Use a ternary operator to return the correct response
// based on the desired destination of the passenger.

function ternaryCheckCity(city) {
  // Write your code here!
  // if(city == 'NYC'){
  // return  "Ok, sounds good."
  // }else{
  //   return "No go."
  // }
  // CONDITION ? thingg to return if condition is true : thingg to return if condition  is false
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}
// * `switchOnCharmFromTip()` — Use a `switch` statement to return a different
// response based on the generosity of the passenger's tip.

function switchOnCharmFromTip(tipAmount) {
  let message;
  switch (tipAmount) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
  }
  return message;

  // Write your code here!
}

// function sayHi(name){
//   console.log(`Hi, ${name}`)
// }

// sayHi("Christine")
// sayHi("Ciara")
//SWITCH EXAMPLE
function generateMessage(person) {
  let message;

  switch (person) {
    case "Ciara":
      // code block
      message = "youre such a good tutor!";
      break;
    case "Katie":
      message = "answer your fucking phone";
      break;
    default:
      message = "too much energy, bye";
    // code block
  }
  return message;
}

console.log(generateMessage("Katie"));
console.log(generateMessage("Ciara"));
console.log(generateMessage("anyone else"));
