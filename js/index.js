// Iteration 1: Names and Input

let hacker1 = 'Jimmy';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'David';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
} else {
  console.log('Something went wrong...');
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let newHacker1 = '';

for (i = 0; i < hacker1.length; i++) {
  let results = hacker1[i].toUpperCase() + ' ';
  newHacker1 += results;
}

console.log(newHacker1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let newHacker2 = '';

for (i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}

console.log(newHacker2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1 > hacker2) {
  console.log(`${hacker1}: The driver's name goes first.`);
} else if (hacker1 < hacker2) {
  console.log(`${hacker2}: The navigator goes first definitely.`);
} else if ((hacker1 = hacker2)) {
  console.log('What?! You both have the same name?');
} else {
  console.log('Something went wrong...');
}
