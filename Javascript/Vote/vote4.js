// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question("Enter DOB (YYYY-MM-DD): ", dobInput => {

//   const dob = new Date(dobInput);
//   const today = new Date();

//   let age = today.getFullYear() - dob.getFullYear();
//   const monthDiff = today.getMonth() - dob.getMonth();

//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//     age--;
//   }

//   console.log("Age:", age);
//   console.log(age >= 18 ? "Eligible to vote" : "Not eligible");

//   readline.close();
// });






const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter DOB (YYYY-MM-DD): ", (dobInput) => {

  // Format check using regex
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dobInput)) {
    console.log("Please enter a proper format");
    rl.close();
    return;
  }

  const dob = new Date(dobInput);

  // Invalid date check
  if (isNaN(dob.getTime())) {
    console.log("Please enter a proper format");
    rl.close();
    return;
  }

  const today = new Date();

  // Future DOB check
  if (dob > today) {
    console.log("DOB cannot be in future");
    rl.close();
    return;
  }

  // Calculate age
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  console.log("Age:", age);

  // Voting check
  console.log(age >= 18 ? "Eligible to vote ✅" : "Not eligible to vote ❌");

  rl.close();
});