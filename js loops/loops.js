// Palindrome Checker:
// Write a function that checks if a given string i a palindrome
//(a word, phrase, or sequence that reads the same backward as forward, e.g., "madam" or "racecar").
//Ignore spaces, punctuation, and case sensitivity.

function palindromeChecker(str) {  
  
    let lowercasestr = str.toLowerCase();  
  
    let cleantext = lowercasestr.replace(/[^a-z0-9]/g, "");  
  
    let left = 0;  
  
    let right = cleantext.length - 1;  

    while (left < right) {  
      
      if (cleantext[left] !== cleantext[right]) {  
        return false;  
  
      left++;  
      right--;  
    }
  }  
    return true;  
  }
    
   //console.log(palindromeChecker("Hello world!"));  
   //console.log(palindromeChecker("racecar"));  

// Number Guessing Game:
// Write a program that generates a random number between 1 and 100. The user has to guess the number.
// For each guess, the program should indicate whether the guess is too high, too low, or
// correct. Use a loop to allow the user multiple attempts until they guess correctly. Track the number of attempts and display it at the end.

function gussGame(min, max) {
  let numTarget = Math.floor(Math.random() * (max - min + 1)) + min;
  let attempts = 0;

  let guss;

  do {
    guss = (prompt("Guss a number between 1 and 100:"));
    if (guss == null)
      return;
    if(guss >= 1 && guss <= 100){
      attempts++;
      if (guss < numTarget) {
        alert("Your guss is too low, Try again.");
      } else if (guss > numTarget) {
        alert("Your guss is to high. Try again.");
      } else if (guss == numTarget){
        alert(" Congratulations, you guessed the number " +  attempts + " attempts. ");
        break 
      }
    } else alert("not a number between 1 - 100")
    } while (guss !== numTarget)
    }
  

  
//gussGame(1, 100);

// Create a function that checks if a given password is strong enough. A strong password is defined as one that has at least 8 characters,
//contains both uppercase and lowercase letters, has at least one number,
//and includes a special character (e.g., !, @, #, $, etc.). Use loops and if-else statements to check each condition.
function isStrongPassword(password) {
  if (password.length < 8) return false;
    if (password.search(/[!@#$%^&*()-+`~{}\';.,><]/) == -1) return false;
    if (password.search(/[0-9]/) == -1 ) return false;
    if (password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1 )
      return flase;
    return true;

    }

//console.log(isStrongPassword("Pjs"));
//console.log(isStrongPassword("Password1!"));
//console.log(isStrongPassword("12345aBc!"));

// Write a function that prints the Collatz sequence for a given number.
//The sequence is generated as follows: Start with any positive integer n.
//Then each term is obtained from the previous term as follows: if the previous term is even,
//the next term is one half of the previous term.
//If the previous term is odd, the next term is 3 times the previous term plus 1. The sequence ends when it reaches 1.

function CollatzSeq(n) {
  console.log(n);
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    console.log(n);
  }
}
//CollatzSeq(93);

//function itco(d) {
//console.log(d)
//while(d !== 5 ){
//   if(d % 2 === 0){
//  d = d / 2
// }else {
//     d = 5 * d + 3
// }
//  console.log(d)
//}
//}
//itco(1)   //infinity loop

// Fibonacci Sequence:Ï
// Write a function that generates the first `n` numbers in the Fibonacci sequence. 
//The Fibonacci sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones.

function FibonacciSeq(M) {
    let first = 1; 
    let second = first;

    let z = first 

    let i = 0 

    while (i < M) {
        console.log(z);
            z = first + second
            first = second;
            second = z 

            i = i + 1;

    }
    return z;

}
//FibonacciSeq(8)



// Prime Number Checker:
// Write a function that checks if a given number is a prime number. 
//A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrimeNum(number) { 
    if (number <= 1)          
        return false;         
    
    for (let i = 2; i < number; i++) { 
        if (number % i === 0) {       
            return false;              
        }
    }
    
    return true;  
}

//console.log(isPrimeNum(11)); 

// Reverse a String:
// Write a function that takes a string as input and returns the string reversed. 
//Do not use the built-in reverse method.
function reverseString (str) {

    let reverse = str.length - 1
    let result = '';
    while (reverse >= 0){
      result += str[reverse]
      reverse--
    
    } 
      return result
  }
     //console.log(reverseString("itco"))

// Sum of Digits:
// Write a function that takes a positive integer as input and returns the sum of its digits. 
//Use a loop to iterate through each digit.

function sumOfDigits(number) {
    let sum = 0;
    for (let i = number; i > 0; i = Math.floor(i / 10)) sum += i % 10;
    return sum;
}
//console.log(sumOfDigits(43))


// Count Occurrences of a Character:
// Write a function that counts the number of times a specific character appears in a given string. 
//Use a loop to iterate through the string and a conditional to count the occurrences.

function countOccurrences(str, char){
  let numberbefortimes = 0;
  for (let i = 0; i < str.length; i++){
    if(char == str[i]) numberbefortimes++
  }
  return numberbefortimes;
}
//console.log(countOccurrences("banana", "a"))


// Multiplication Table:
// Write a function that prints the multiplication table for numbers 1 through 10. 
//Use nested loops to generate the table.

function multiplicationTable() {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    for (let y = 1; y <= 10; y++) {
      table += i * y + "\t";
    }
    table += "\n";
  }
  console.log(table);
  return table;
}
console.log(multiplicationTable())

// Armstrong Number Checker:
// Write a function that checks if a given number is an Armstrong number. 
//An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function isArmstrongNumber (number) {
  let sum = 0;
  let temp = number + '';
  let i = temp.length -1;
  temp = number;
  while (temp > 0 ) {
    sum += (temp % 10) ** i;
    temp = Math.floor(temp / 10);
  }
  return sum == number;
}
console.log(isArmstrongNumber(9474))