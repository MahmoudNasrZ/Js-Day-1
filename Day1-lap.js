// var a = 3;
// var b = -7;
// var c = 2;

// function Sort(a, b, c) {
//   var d;
//   if (a < b) {
//     [b, a] = [a, b];
//   } else if (b > a) {
//     [b, a] = [a, b];
//   } else if (b > c) {
//     [c, a] = [a, c];
//   } else if (c < a) {
//     [b, c] = [c, b];
//   } else if (c < a) {
//     [a, c] = [c, a];
//   }
//   //   alert(`${a},${b},${c}`),
//   //   alert(a + "," + b + "," + c);
//   return alert(a + "," + b + "," + c);
// }

// Sort(a, b, c);

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
//   num = Math.floor(Math.random() * 11);
//   flag = 0;
//   while (true) {
//     if (Userguess == num) {
//       console.log("Good");
//       break;
//     } else if (flag < 3) {
//       console.log("Bad Answer");
//       var Userguess = prompt(
//         "wrong guess, want to try again? Guess Between 0 - 10"
//       );
//     } else {
//       alert("Try Again Another Time");
//       break;
//     }
//     flag++;
//   }
// }
// var guess = prompt("Please enter your a Guess Between 0 - 10");
// RandomNum(guess);
// function happyNum(){
// if(num >0)

// }
// happyNum()
