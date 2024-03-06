// set a value for the variable age,then
let age: number = 30;

// if the person is 2 years old, then print the message that the person is a baby.
// if the person is least 2 years old but less then 4, print the message that the person is a toddler.
// if the person is least 4 years old but less then 13, print the message that the person is a kid.
// if the person is least 13 years old but less then 20, print the message that the person is a teenager.
// if the person is least 20 years old but less then 65, print the message that the person is an adult.
// if the person age is 65 or older, print the message that the person is an elder.

if (age < 2) {
    console.log("The person is a baby");
} else if (age >= 2 && age < 4) {
    console.log("Person is a toddler");
} else if (age >= 4 && age < 13) {
    console.log("person is a kid");
} else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
} else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
} else "person is an elder.";
