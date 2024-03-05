// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string ="Shahid";
// in lowercase
console.log("lowercase:,"personName.toLowerCase());
// in uppercase
console.log("uppercase:,"personName.toUpperCase());
// titlecas
console.log("titlecase:,"personName.replace(/\b\w/g,c=> c. toUpperCase()));