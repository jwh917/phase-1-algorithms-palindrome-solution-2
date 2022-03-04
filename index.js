function isPalindrome(word) {
  // Write your algorithm here
  let wordBackwards = ""
  for (let i = word.length - 1; i >= 0; i--){ 
    // console.log(word)
    // console.log(word.length)
    wordBackwards += word[i];
  // console.log(wordBackwards)
  }
  if(word === wordBackwards){
      // console.log(true)
    return true
   }
  else{
      // console.log(false)
      return false
    } 
} 


/* 
  Add your pseudocode here
  initialize empty new word variable (= "") inside function
  iterate over each letters in the input word the opposite way (right 2 left)
    as the loop goes the opposite way it put those letters into the empty word varbiale
    console.log() the new word variable after the loop
    if the new word variable matches (===) the input word
    return true
    else 
    return false
*/

/*
  Add written explanation of your solution here
  declare the new word varibale 
  for loop
  if statement
  2 loops
  -1 to go thru the word the regular way(left 2 right)
  -2 to go thru the word the opposite way (right 2 left)
  no need for the 2nd loop i only need to go thru the word the ooposite way 
  after the  going thru the word the ooposite way 
  if statmement checking if the possible word matches (===) the new word varibale
  if they match or (equal the same thing) return true
  if not 
  return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("string"));
  
}

module.exports = isPalindrome;

// //after watching video
// function reverseString(word) {
//   return word.split("").reverse().join("");
// }

// function isPalindrome(word) {
//   // reverse the input string
//   const reversedWord = reverseString(word);
//   // compare the reversed string to the input
//   return word === reversedWord;
// }

// //after watching 2nd video
// function isPalindrome(word) {
//   // iterate from the beginning of the string to the middle of the string
//   for (let i = 0; i < word.length / 2; i++) {
//     // compare the letter we're iterating over to the corresponding letter at the end of the string
//     const j = word.length - 1 - i;
//     if (word[i] !== word[j]) {
//       // if the letters don't match, return false
//       return false;
//     }
//   }

//   // if we reach the middle, and all the letters match, return true
//   return true;
// }

// //Make It Clean and Readable
// function isPalindrome(word) {
//   // iterate from the beginning of the string to the middle of the string
//   for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
//     // compare the letter we're iterating over to the corresponding letter at the end of the string
//     const endIndex = word.length - 1 - startIndex;
//     if (word[startIndex] !== word[endIndex]) {
//       // if the letters don't match, return false
//       return false;
//     }
//   }

//   // if we reach the middle, and all the letters match, return true
//   return true;
// }
