//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = ("shahid saeed");
//print in capital
console.log(personName.toUpperCase());
// print in small
console.log(personName.toLowerCase());
// print in title case
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
