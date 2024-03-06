//* Alien Color 3

let alienColors: string = "green";

// version 1
if (alienColors === "green") {
  console.log("Version 1:The player earned 5 points");
} else if (alienColors === "yellow") {
  console.log("The player earned 10 points");
} else if (alienColors === "Red") {
  console.log("The player earned 15 points");
} else {
  console.log("Please select the right color");
}

// version 2
alienColors = "yellow";
if (alienColors === "green") {
  console.log(" The player earned 5 points");
} else if (alienColors === "yellow") {
  console.log("Version 2:The player earned 10 points");
} else if (alienColors === "Red") {
  console.log("The player earned 15 points");
} else {
  console.log("Please select the right color");
}

// version 3
alienColors = "Red";
if (alienColors === "green") {
  console.log("The player earned 5 points");
} else if (alienColors === "yellow") {
  console.log("The player earned 10 points");
} else if (alienColors === "Red") {
  console.log("Version 3: The player earned 15 points");
} else {
  console.log("Please select the right color");
}
