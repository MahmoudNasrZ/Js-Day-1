// Day 1 JavaScript

// function Sort(a, b, c) {
//   if (a < b) {
//     [a, b] = [b, a];
//   }
//   if (b < c) {
//     [b, c] = [c, b];
//   }
//   if (a < b) {
//     [a, b] = [b, a];
//   }
//   //   alert(`${a},${b},${c}`), alert(a + "," + b + "," + c);
//   return console.log(a + "," + b + "," + c);
// }

// Sort(-500, -21, 20);

// function FizzBuzz(num) {
//   while (num <= 100) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//       console.log("Fizz");
//     } else if (num % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(num);
//     }
//     num++;
//   }
// }

// FizzBuzz(1);
// function FizzBuzz(num) {
//   var sum = 0; // Initialize sum
//   var i = 0;

//   while (i <= num) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum += i;
//     }
//     i++;
//   }

//   return sum;
// }

// console.log(FizzBuzz(1000));

// function RandomNum(Userguess) {
//   num = 3;
//   //   num = Math.floor(Math.random() * 11);
//   flag = 0;
//   while (true) {
//     if (parseInt(Userguess) == num) {
//       console.log("Good");
//       break;
//     } else if (flag < 3) {
//       console.log("Bad Answer");
//       var Userguess = prompt(
//         "wrong guess, want to try again? Guess Between 0 - 10"
//       );
//     } else {0x614b16410c90
//       alert("Try Again Another Time");
//       break;
//     }
//     flag++;
//   }
// }
// var guess = prompt("Please enter your a Guess Between 0 - 10");
// RandomNum(guess);
// Day 2 JavaScript
// 1. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     // const element = array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         console.log(array[j] + " " + array[j + 1]);
//         k = array[j];

//         array[j] = array[j + 1];
//         array[j + 1] = k;
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort(arr1));
// -------------------------------------------------------------------------------------------------------------------
// 2. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

// function longestString(string) {
//   let max = 0;
//   var maxName = "";
//   if (typeof string === "string") {
//     const Stringarray = string.split(" ");
//     for (let j = 0; j < Stringarray.length; j++) {
//       if (Stringarray[j].length > max) {
//         max = Stringarray[j].length;
//         maxName = Stringarray[j];
//       }
//     }
//   } else {
//     console.log("Please Enter a String");
//   }
//   return maxName + " Is the Longest Word:" + max;
// }

// const s = "Web Development Tutorial";
// console.log(longestString(s));
// 3. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function isPrime(nums) {
//   for (let i = 2; i <= Math.sqrt(nums); i++) {
//     if (nums % i == 0) {
//       console.log("Is not prime");
//     } else {
//       console.log("Is  prime");
//     }
//   }
// }

// nums = 7;
// isPrime(nums);

// 4. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

// function amountTocoins(num, amout) {
//   var i = 0;
//   var arr = [];
//   while (i < amout.length) {
//     if (num >= amout[i]) {
//       arr.push(amout[i]);
//       num = num - amout[i];
//       //   i--;
//     } else {
//       i++;
//     }
//     // i++;
//   }
//   return arr;
// }
// console.log(amountTocoins(56, [25, 10, 5, 2, 1]));
// // 45 = 25 10 10 2 2
// Day 3 Lap -----------------------------------------------------------------------------------------------------
// 1. you are required to, given a string, replace every letter with its position in the alphabet
// If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc.
// Example: alphabet_position("The sunset sets at twelve o' clock.") Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// console.log(letter); // Output: Z
// let text =
//   "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
// function toAlphabet(text) {
//   var newArry = [];
//   var letter;
//   var toArray = text.split(" ");
//   console.log(toArray);

//   for (let i = 0; i < toArray.length; i++) {
//     if () {

//       letter = String.fromCharCode(parseInt(toArray[i]) + 64);
//       newArry.push(letter);
//       console.log(letter);
//     }
//   }

//   return newArry.join("");
// }

// let text = "The sunset sets at twelve o' clock.";
// function toAlphabet(text) {
//   var newArry = [];
//   var letter;
//   var toArray = text
//     .toLowerCase()
//     .replace(/[^a-z]/g, "")
//     .split("");
//   console.log(toArray);

//   for (let i = 0; i < toArray.length; i++) {
//     letter = toArray[i].toLowerCase().charCodeAt(0) - 96;

//     // console.log(letter);
//     newArry.push(letter);
//   }

//   return newArry.join("");
// }
// console.log(toAlphabet(text));

// var words = "is2 Thi1s T4est 3a";
// ---------------------------------------------------------------------------------------------------------------------------------------------
// 2. Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
// function sortAlphabet(words) {
//   var word = words
//     .split(" ")
//     .sort((x, z) => {
//       var wordA = x.match(/\d/);
//       var wordB = z.match(/\d/);
//       return wordA - wordB;
//     })
//     .join(" ");

//   return word;
// }
// console.log(sortAlphabet(words));

// var words = "is2 Thi1s T4est 3a";
// function sortAlphabet(words) {
//   var word = words.split(" ");
//   for (var i = 0; i < word.length; i++) {
//     var x = word[i].split("").sort();
//     console.log(word[i], word[i + 1]);
//     if (typeof word[i + 1] === "string") {
//       var z = word[i + 1].split("").sort();
//       if (x[0] > z[0]) {
//         [word[i], word[i + 1]] = [word[i + 1], word[i]];
//       }
//     } else {
//       console.log("Element is not a string");
//     }
//   }
//   return word;
// }
// function order(words) {
//   arr = words.split(" ");
//   arrayNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].match(/\d/);
//     arrayNumber.push(arr[i].match(/\d/));
//   }

//   for (let j = 0; j < arrayNumber.length; j++) {
//     console.log(arrayNumber[j]);
//     if (arrayNumber[j] > arrayNumber[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
//   var sortedArr = arr;
//   return sortedArr;
// }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
// ---------------------------------------------------------------------------------------------------------------------------------------------

// 3. Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters,
// it should return the product of the two. If the function is only passed one parameter -
//  it should return a function which can later be passed another parameter to return the product.
//  You will have to use closure and arguments to solve this.
// function specialMultiply(a, b) {
//   if (arguments.length === 2) {
//     return a * b;
//   } else {
//     return function (c) {
//       return a * c;
//     };
//   }
// }
// console.log(specialMultiply(1, 2));
// const multiplyBy5 = specialMultiply(6);
// console.log(multiplyBy5(4));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// 4-Write a function called guessingGame which takes in one parameter amount. The function should return
// another function that takes in a parameter called guess. In the outer function, you should create a variable
// called answer which is the result
// of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.
// In the inner function, if the guess passed in is the same as the random number (defined in the outer function)
// you should return the string "You got it!". If the guess is too high return "Your guess is too high!"
// and if it is too low, return "Your guess is too low!". You should stop the user from guessing if
// the amount of guesses they have made is greater than the initial amount passed to the outer function.

// function guessingGame(amount) {
//   let answer = Math.floor(Math.random() * 11);
//   let guesses = 0;
//   return function (guess) {
//     guesses++;
//     if (guess === answer) {
//       console.log("You Win");
//     } else if (guesses >= amount) {
//       console.log("GameOver Try again Later");
//     } else if (guess <= answer) {
//       console.log("You are Too High");
//     } else {
//       console.log("You are Too low");
//     }
//   };
// }

// const game = guessingGame(5);

// console.log(game(11));
// console.log(game(11));
// console.log(game(11));
// console.log(game(11));
// Day 4 Lap ----------------------------------------------------------------------------------------------------------------------------------------------------------
// var slider = document.querySelector('.slider')
// var images=["compman.gif","1rain_world.png","2.png","2rain_world.png","black_hole_by_kurzgesagt.png","1331316.png","861724.png","668125.png"]
// var loop
//  var i=0
//  slider.addEventListener('mouseenter', function () {
//     loop = setInterval(function () {
//       console.log(`${i}`);
//       slider.src = `./${images[i]}`;
//       i++;
//       if (i === images.length) {
//         i = 0; 
//       }
//     }, 500);
//   });
  
//     slider.addEventListener('mouseleave', function (e) {
//             clearInterval(loop)
//              i=0
//             slider.src = `./${images[i]}`;

//            })
var select = document.getElementById('select');
var detailsTable = document.querySelector('#detailsTable');
var nameCell = document.querySelector('#nameCell');
var numberCell = document.querySelector('#ageCell');
var emailCell = document.querySelector('#emailCell');
var phoneCell = document.querySelector('#phoneCell');

var value=fetch("db.json")
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json(); 
  })
  .then(data => {
    // console.log("Fetched data:", data);
    options(data);
  })
  .catch(error => console.error("Fetch error:", error));

function options(data) {
  let select = document.getElementById('select'); 
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name)
    let option = document.createElement("option");
    option.value = i; 
    option.textContent = data[i].name;
    select.appendChild(option);
  }
  select.addEventListener('change', function() {
    if (select.value === "") {
        detailsTable.style.display = 'none';
    } else {
        var value = select.value
        console.log(data);
        
    
        nameCell.textContent = data[value].name
        addressCell.textContent = data[value].address;
        emailCell.textContent = data[value].email;;
        phoneCell.textContent =  data[value].phone ;
        numberCell.textContent = data[value].numberrange;
    
        detailsTable.style.display = 'table';
    }
    });
}

