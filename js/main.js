/*** Variables ***/
// 1. Rules for valid variable names in JavaScript:
// - Must start with a letter, $, or _
// - Can include letters, numbers, $, and _, but no spaces or special characters
// - Cannot begin with a number
// - Case-sensitive (e.g., 'name', 'Name', and 'nAme' are different variables)
// - Avoid using reserved keywords (e.g., 'let', 'const', 'var')
// - Be cautious of global variables in browsers (e.g., 'alert', 'document', 'window')

//Avoid Keywords https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords reserved words that are part of the language
//Avoid variable names already assigned. Browsers define global standard variables like: alert, document, window


//2. let
// - Use 'let' for variables whose values are expected to change.
// - 'let' provides block scope and allows reassignment.
let gameScore;
console.log(gameScore);
gameScore = 0;
console.log(gameScore);

// 3. const
// - Use 'const' for variables with values that should not change.
// - 'const' declarations must be initialized at declaration.
// - Attempting to reassign a 'const' variable will result in a runtime error.

const firstName = "Jing-An";
console.log(firstName);

console.log(`that's socre:${gameScore} and my name: ${firstName}`);
/*** Data types ***/
// 1. Strings
// - Strings are used for text. They can be enclosed in single quotes '', double quotes "", or backticks ``.
// - String concatenation can be done using the '+' operator or template literals for interpolation.

// 2. Number
// - Includes integers, decimals, negatives, and numeric separators

// 3. Boolean
// - Boolean type represents logical values: true or false.
// - Commonly used in conditional statements and logical operations.

let isLoggedIn = false;

// 4. Arrays
// - Arrays are ordered list of values.
// - They can store elements of different types.
// - Use square brackets for arrays [].
// - ******** important: Access elements by their index, starting from 0.

//declare array
//display the array
//display a specific element in the array 
let shoppingCart = ['Record Player', 'Loudspeaker', 'cable', 'mic', 5, true];
console.log(shoppingCart);
console.log('the 4th item is:' + shoppingCart[3]);

// just my little test ;)
if(shoppingCart[5] == true){
    console.log("that's a true");
}else{
    alert("that's a false");
}
// Multidimensional Arrays
const shoppingCartMultidimensional = [      //opening the main array
    [                                       //first entry - index 0
        'Record player',                    //first element in the first array
        99,                                 //second element in the first array
        'index-0'                           //third element in the first array
    ],
    [                                       //second entry - index 1
        'Loudspeaker, the element i want',                      //first element in the second array
        120,                                //...
        'index-1',
    ]
]                                           //closing the main array

//display the array
//display a specific element

console.log(shoppingCartMultidimensional);
console.log("the sepcific element is:  " + shoppingCartMultidimensional[1][0]);

// 5. Objects
// - Objects are collections of key-value pairs (properties).
// - They can store various types of data, including nested objects.
// - Use curly braces for objects {}.
// - Access object properties using dot notation '.' or square brackets [].

// object literal notation {}

const student = {
    firstName: 'David',
    lastNmae: 'Who',
    isActice: false
}

console.log(student);
console.log(student["lastNmae"] +" and "+ student[`firstName`]);
console.log(student.firstName);


//Common use of arrays and objects
const students = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        isActive: false
    },
    {
        firstName: 'Emma',
        lastName: 'Anderson',
        isActive: true
    },
    {
        firstName: 'Liam',
        lastName: 'Jackson',
        isActive: true
    }
]

console.log(`Emma's last name is: `+students[1].lastName);


/*** Operators and Expressions ***/
// Arithmetic operators: +, -, *, /, and % for calculations.
// Shorthand operators: +=, -=, *=, /=, and %= for combined assignment and operation. 
// Comparison operators: ==, != for equality checks; ===, !== for strict equality checks.


// Add a value to a variable and then assign the result back to that variable

gameScore = gameScore + 1;
console.log(gameScore);

gameScore++;
console.log(gameScore);

gameScore = gameScore++ + gameScore++;
console.log(gameScore);

gameScore += 3;
console.log(gameScore);

console.log(5 === '5');


console.log(5 == 5 && 5 ==='5' && 0 ==0);
console.log(5 == 5 || 5 ==='5');

let playStatus = 5 == 5 && 5 ==='5' && 0 ==0;
console.log(playStatus);
/*** Guided Practice ***/

// A. Calculate the total and average grades for a student across different courses, compare the grades, and check whether the student passed or failed based on a minimum passing grade of 50 points for each course.


// Step 1: Declare the student's grades in three different courses:
// Design: 85
// Development: 90
// Project Management: 80

const designGrade = 85;
const developmentGrade = 90;
const projectManagementGrade = 80;
const minimumGrade = 50;
// Step 2: Calculate the total grade for the student across the three courses and store it in a variable called totalGrade.
const totalGrade = designGrade + developmentGrade + projectManagementGrade;
console.log("total grade " + totalGrade);

// Step 3: Calculate the average grade for the student and store it in a variable called averageGrade.

const averageGrade = totalGrade / 3;
console.log("average " + averageGrade);
// Step 4: Compare the grades:
// Check if the Design grade is greater than or equal to 50 (passing grade). Store the result in a variable called isDesignPassed.

const isDesignPassed = designGrade >= minimumGrade;
console.log(isDesignPassed);


// Check if the Development grade is greater than or equal to 50. Store the result in a variable called isDevelopmentPassed.

const isdevelopmentPassed = developmentGrade >= minimumGrade;
console.log(isdevelopmentPassed);

// Check if the Project Management grade is greater than or equal to 50. Store the result in a variable called isProjectManagementPassed.

const isprojectManagementPassed = projectManagementGrade >= minimumGrade;
console.log(isprojectManagementPassed);


// Step 5: Use logical operators:
// Check if the student passed all three courses by ensuring that all course grades are 50 or above. Store the result in a variable called passedAllCourses.
// Check if the student failed any course (i.e., if any course grade is below 50). Store the result in a variable called failedAnyCourse.

const passedAllCourses = isDesignPassed && developmentGrade && projectManagementGrade >= minimumGrade && isprojectManagementPassed;
console.log('does the student pass? ' + passedAllCourses);

const failedAnyCourse = designGrade < minimumGrade || developmentGrade < minimumGrade || projectManagementGrade < minimumGrade;
console.log('studen falled any course? ' + failedAnyCourse);

// Step 6: Output the results to the console using console.log():
// Print the total grade.
console.log('total grade: ' + totalGrade);
// Print the average grade.
console.log('average grade: ' + averageGrade);
// Print whether the student passed each course. Did the student pass...
console.log('did the student pass design?  ' + isDesignPassed);
console.log('did the student pass development?  ' + isdevelopmentPassed);
console.log('did the student pass project management?' + isprojectManagementPassed);
// Print whether the student passed all courses.
console.log('did the student pass all?  ' + passedAllCourses);

// Print whether the student failed any course.
console.log('did the student fail none?  ' + failedAnyCourse);

if(passedAllCourses == true){
    alert("Wow, good student!");
}




// B. Calculate the total price of items in a shopping cart, determine if the customer qualifies for a discount, and check if the total is within the customer’s budget.

// Steps:
// Step 1: Declare the prices of three items in the shopping cart:
    // Item 1 (Laptop): $800
    // Item 2 (Mouse): $25
    // Item 3 (Headphones): $60

// Step 2: Calculate the total price for all three items and store it in a variable called totalPrice.

// Step 3: Check if the customer qualifies for a discount:
// If the total price is greater than or equal to $500, the customer qualifies for a discount. Store the result in a variable called qualifiesForDiscount.

// Step 4: Check if the total price exceeds the customer’s budget:
// Assume the customer's budget is $1000. Store the result of whether the total price is within the budget in a variable called withinBudget.

// Step 5: Output the results to the console using console.log():
// Total price of the shopping cart:
// Does the customer qualify for a discount?
// Is the total price within the customer's budget?


