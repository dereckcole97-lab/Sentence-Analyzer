/*

In this workshop, you will build a sentence analyzer that will take a sentence and get the count for the number of words, vowels, consonants, and punctuation marks.

Create a getVowelCount function with a parameter called sentence. Your function should return the total number of vowels in a sentence.



*/
//need of the function because this action will repeat itself overtime
function getVowelCount(sentence) {
    const vowels = "aeiouAEIOU"; // all vowels (uppercase + lowercase)
    
    let count = 0; //initializing a counter variable
    //setting this counter to 0

    // Loop through each character in the sentence
    //the request was to use the for loop
    for (let i = 0; i < sentence.length; i++) { //for loop that groups all the vowels
        //if statement to check the inclusion of vowels in the sentence
        if (vowels.includes(sentence[i])) {
            count++; // increment count if character is a vowel
        }
    }

    return count; // return the total number of vowels as a number
}

/*
Now it is time to test your getVowelCount function.

Create a vowelCount variable and assign it the result of calling the getVowelCount function with the argument of "Apples are tasty fruits"

After that, log the following to the console: "Vowel Count: [vowel count goes here]". Replace [vowel count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.

*/
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`); //because the double quotes won't be accurate
//to wrap a template literal concatenation, I will be using the backtick

/*
It's time to count the consonants. Create a getConsonantCount function with a sentence parameter.

Inside the function, use a loop to count the number of consonants in the sentence that will be passed into the function when it is called. A consonant is any letter that is not one of the following characters: "aeiou".

Your getConsonantCount function must return a number.

*/
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz"; //lower case consonants

  let count = 0; //set a counter to 0

  for (const char of sentence.toLowerCase()) { //for loop that groups all the consonants
    if (consonants.includes(char)) { //if statement checking the inclusion of the consonants
        //in the sentence
      count++; //based on theif condition, increment the counter
    }
  }
  return count; //return of the number
}
/*
Now it is time to test your getConsonantCount function.

Create a consonantCount variable and assign it the result of calling the getConsonantCount function with the argument of "Coding is fun"

After that, log the following to the console: "Consonant Count: [Consonant count goes here]". Replace [Consonant count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.

*/
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

/* 
You should count the number of punctuations now.

Create a getPunctuationCount function with a sentence parameter.

Inside the function, create a loop to count the number of punctuation characters in the sentence that will be passed into the function when it is called. For our purposes, a punctuation character is any character that is not a space (" ") or a letter.

Your getPunctuationCount function must return a number.

*/
function getPunctuationCount(sentence) {
    let count = 0;

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Check if character is NOT a letter and NOT a space
        if (!(/[a-zA-Z]/.test(char)) && char !== " ") {
            count++; // increment punctuation count
        }
    }

    return count; // return the total number of punctuation characters
}

/*
Now it is time to test your getPunctuationCount function.

Create a punctuationCount variable and assign it the result of calling the getPunctuationCount function with the argument of "WHAT?!?!?!?!?"

After that, log the following to the console: "Punctuation Count: [Punctuation count goes here]". Replace [Punctuation count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.

*/
// Declare and initialize at the same time
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);
/*
Finally, count the number of words by creating a getWordCount function with a sentence parameter. The function should return the total number of words in the sentence passed in when it is called.

*/
function getWordCount(sentence) {
    let count = 0;

    // Split the sentence into words using space as a separator
    const words = sentence.split(" ");

    // Loop through the array and count non-empty words
    for (let i = 0; i < words.length; i++) {
        if (words[i].trim() !== "") { // ignore extra spaces
            count++;
        }
    }

    return count; // return the total number of words
}

/*#
Test your getWordCount by creating a wordCount variable set to the calling of the getWordCount function with the sentence "I love freeCodeCamp".

After that, log the following to the console: "Word Count: [Word count goes here]". Replace [Word count goes here] with the actual variable name. You can choose to use template strings or string concatenation with the + operator here.

*/
const wordCount = getWordCount("I love freeCodeCamp");

// Log the result using a template string
console.log(`Word Count: ${wordCount}`);
