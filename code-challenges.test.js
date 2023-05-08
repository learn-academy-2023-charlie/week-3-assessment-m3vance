// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciMaker", () => {
  const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

  const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibonacciMaker(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciMaker(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
}) 

// Test Output: FAIL  ./code-challenges.test.js
  // ReferenceError: fibonacciMaker is not defined
      // (cleaned up test output)


// b) Create the function that makes the test pass.

// Pseudo code: 
  // Input: A number specifying a length
  // Output: A array that is the length of the inputed number
  // Process: Create an array fibBegin = [1, 1]
    // Use a for loop to start executing at 2. 
    // Use .push to add the previous two numbers together and add them to the array fibBegin

const fibonacciMaker = (num) => {
const fibBegin = [1, 1]
for (let x = 2; x < num; x++) {
  fibBegin.push(fibBegin[x - 1] + fibBegin[x - 2])
  }
  return fibBegin
}
// console.log(fibonacciMaker(fibLength1));

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("valueSorter", () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]
it("takes in an object and returns an array of the values sorted from least to greatest", () => {
  expect(valueSorter(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(valueSorter(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Test output:  FAIL  ./code-challenges.test.js
  // ReferenceError: valueSorter is not defined
    // (cleaned up test output)


// b) Create the function that makes the test pass.

// Pseudo code
  // Input: An object.
  // Output: An array of values sorted from least to greatest.
  // Process: Create a function that takes in an object and creates an array of the values, using Object.values. Then, sort the array using the .sort method.

  const valueSorter = (notTheKeyWordObject) => {
    const valuesArray = Object.values(notTheKeyWordObject)
    return valuesArray.sort((a, b) => a - b)
    }



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayAdderTogetherer", () => {
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []
it("takes in an array and returns an array of the accumulating sum", () => {
  expect(arrayAdderTogetherer(accountTransactions1)).toEqual([100, 83, 60, 51])
  expect(arrayAdderTogetherer(accountTransactions2)).toEqual([250, 161, 261, 165])
  expect(arrayAdderTogetherer(accountTransactions3)).toEqual([])
  })
})

// Test output:  FAIL  ./code-challenges.test.js
  // ReferenceError: arrayAdderTogetherer is not defined
    // (cleaned up test output)

// b) Create the function that makes the test pass.

// Pseudo code:
  // Input: An array.
  // Output: An array of of the accumulating sum.
  // Process: create a function called arrayAdderTogetherer
    // Create a variable for sum = 0
    // Create an empty array variable named newArray 
    // Use a for loop
    // Add sum += array[i]
    // Use .push to add the new sum to the empty array

    //Red
    // const arrayAdderTogetherer = (array) => {
    //   var sum = 0
    //   const newArray = []
    //   for (let i = 0; i < array.length; i++) {
    //     sum += array[i]
    //     newArray.push(sum)
    //   }
    //   return newArray
    // }


    //Green
    const arrayAdderTogetherer = (array) => {
      var sum = 0
      const newArray = array.map(value => {
      sum += value
      return sum
      })
      return newArray
      }

    

    // Notes: This was another one where the refactor was easier to write than the for loop'd version. 