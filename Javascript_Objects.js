// A. Make an array containing at least 5 JavaScript objects.
let students = [
  { name: "Angelique", age: 21, grade: 90 },
  { name: "Adam", age: 22, grade: 85 },
  { name: "Gab", age: 21, grade: 88 },
  { name: "Reb", age: 21, grade: 92 },
  { name: "Krysler", age: 21, grade: 76 }
];

// B. Use the same array and use the forEach() method to print each object in the array.
console.log("B. forEach() output:");
students.forEach(student => {
  console.log(student);
});

// C. Use the same array and demonstrate a sample code using the push() method on the array.
students.push({ name: "Fiona", age: 20, grade: 89 });
console.log("\nC. After push():");
console.log(students);

// D. Use the same array and demonstrate a sample code using the unshift() method on the array.
students.unshift({ name: "George", age: 18, grade: 95 });
console.log("\nD. After unshift():");
console.log(students);

// E. Use the same array and demonstrate a sample code using the filter() method on the array.
let topStudents = students.filter(student => student.grade >= 90);
console.log("\nE. filter() output (grade >= 90):");
console.log(topStudents);

// F. Use the same array and demonstrate a sample code using the map() method on the array.
let studentNames = students.map(student => student.name);
console.log("\nF. map() output (names only):");
console.log(studentNames);

// G. Use the same array and demonstrate a sample code using the reduce() method on the array.
let totalGrades = students.reduce((total, student) => total + student.grade, 0);
console.log("\nG. reduce() output (total grades):", totalGrades);

// H. Use the same array and demonstrate a sample code using the some() method on the array.
let hasFailing = students.some(student => student.grade < 75);
console.log("\nH. some() output (has failing grade?):", hasFailing);

// I. Use the same array and demonstrate a sample code using the every() method on the array.
let allPassed = students.every(student => student.grade >= 75);
console.log("\nI. every() output (all passed?):", allPassed);
