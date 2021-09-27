/* eslint-disable no-plusplus */
/*
 * stmnts-07.js
 * Language: javascript
 * Test: tests/stmnts-07.test.js
 * Path: src/stmnts-07.js
 */

/**
 * Checks to make sure 2 parameters both are truthy
 * @param {*} a - first parameter
 * @param {*} b - second parameter
 * @returns {boolean} - true if a and b are both true, false otherwise
 * ? [JavaScript: The Definitive Guide, Chapter 4.10](https://bit.ly/39lbxnK)
 */
// eslint-disable-next-line consistent-return
function logicalAnd(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

/**
 * Checks if at least one of the parameters is truthy
 * @param {*} a - first parameter
 * @param {*} b 0 second parameter
 * @returns {boolean} - true if a or b is truthy, false if both are falsy
 */
function logicalOr(a, b) {
  if (a === true || b === true) {
    return true;
  }
  return false;
}

/**
 * Takes a boolean and returns the opposite
 * @param {boolean} bool - the boolean to invert
 * @returns {boolean} - the opposite of the given boolean
 */
function invertBoolean(bool) {
  return !bool;
}

/**
 * Count the number of odd numbers from 0 to num (exclusive)
 * @param {number} num  - the number to count to
 * @returns {number} - the number of odd numbers from 0 to num
 * ? num is a positive integer greater than 0
 * ? using a for loop from 0 to num, iterating by 1
 * ? this required to be a for loop
 * ? return the count of odd numbers
 * ? for example, if num is 9 you will check 0,1,2,3,4,5,6,7,8
 * ? and count of the odd values is 4
 * ?
 * ? [JavaScript: The Definitive Guide, Chapter 5.4.3](https://bit.ly/39hrIlW)
 */
function numberOfOdds(num) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (i % 2 === 1) {
      count += 1;
    }
  }
  return count;
}

/**
 * Calculates the sum of all the numbers from 0 to num (inclusive)
 * @param {number} num - the number to add up to
 * @returns {number} - the sum of all numbers from 0 to num
 * ? num is a positive integer greater than 0
 * ? this required to be a for loop
 * ? using a for loop from 0 to num, iterating by 1
 * ? For example, num is 4 then return 10 because 1 + 2 + 3 + 4 = 10.
 */
function addUpTheNumbers(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count += i;
  }
  return count;
}

/**
 * Calculates the letter grade for a given score
 * @param {number} score - the numeric grade score for a student
 * @returns {string} - the letter grade for that score
 * ? score is a positive integer 0 through 100
 * ? generate a letter grade based on the following
 * ? table
 * ? < 60	F
 * ? < 70	D
 * ? < 80	C
 * ? < 90	B
 * ? <= 100	A
 * ? return the letter grade as a string
 * ?
 */
function gradeGenerator(score) {
  let grade = '';
  if (score < 60) {
    grade = 'F';
  } else if (score < 70) {
    grade = 'D';
  } else if (score < 80) {
    grade = 'C';
  } else if (score < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return grade;
}

/**
 * Calculates a string of the student's name and grade
 * @param {string} name - the name of the student
 * @param {number} score - the numeric grade score for a student
 * @returns {string} - the student's name and their letter grade
 * ? name is a string and score is a number
 * ? 0 through 100
 *
 * ? MUST CALL the above gradeGenerator() from above
 * ? to find a letter grade with that score
 * ? return a string written like:
 * ? Francine got an A
 * ? David got a B
 * ? note it's 'an A' (not a A) and 'an F' (not a F)
 */
function getGrade(name, score) {
  const grade = gradeGenerator(score);
  let a = 'a';
  if (grade === 'A' || grade === 'F') {
    a = 'an';
  }
  return `${name} got ${a} ${grade}`;
}

module.exports = {
  logicalAnd,
  logicalOr,
  invertBoolean,
  numberOfOdds,
  gradeGenerator,
  getGrade,
  addUpTheNumbers,
};
