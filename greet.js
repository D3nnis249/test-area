export function greet(coach) {
  if ("Martin" === coach || "Thomas" === coach || "Stefan" === coach) {
    return "Hello Coach!";
  } else {
    return "Hello stranger!";
  }
}

console.log(greet("Martin"));
