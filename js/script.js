console.log ("Corinne Padilla")
console.log ("Italian")

//This is a single line comment//

/*This is a multi line comment*/

console.log ("Supercalifragilisticexpialidocious".length);
console.log (14);
console.log (20n);
console.log (typeof 14);
console.log (typeof 20n);

// var variable = 'test'; avoid using var

// let variable = 'new'; can change
// let variable = 'new';
// console.log(variable);
// const variable = 'test'; can never be changed


let variable = 12;
let var2 =10;
variable = variable - var2;
console.log(variable);

// variable names must start with an underscore, dollar sign, or letter (uppercase or lowercase or camelcase)
// variables cannot be named reserved words
// Don't use short words
// Double name your variables
// example: when discussing what position to place your mouse (variable = mouseposition or mouse_position or &mouseposition or mousePosition) makes your variable names clearer as you continually grow your coding
// pick names that you can remember as you continue your work to make it easier to follow your own work

// example one use for loop counters (repeats of word) exists only after we declare
// let shape = 'square';

// console.log(shape);

// example two (try to never use) exists forever
// var shape = 'square';

// console.log(shape);

// example three (use const first before let especially if you do not know if you need to reuse) exists only after we declare
const shape = 'square';

console.log(shape);

// do not reassigne just used lots of consts
// const first = 1;
// const second = 2;
// const sum = first + second;

let first = 1;
first += 2
console.log(first);

let second = 3;
second -= 2
console.log(second);

let third = 5;
third *= 2
console.log(third);

let fourth = 8;
fourth /= 2
console.log(fourth);

let fifth = 7;
fifth %= 2
console.log(fifth);

let sixth = 11;
sixth **= 3
console.log(sixth);

let seventh = 11;
seventh += 2
console.log(seventh !== 11);

let tenth = 11;
tenth += 2
console.log(tenth === 11);

let eighth = 11;
eighth += 2
console.log(eighth <= 11);

let ninth = 11;
ninth += 2
console.log(ninth >= 11);

// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = 'fit';
// Assign an adjective
let adj2 = 'wet';
// Assign an adjective
let adj3 = 'sticky';
// Assign an adjective
let adj4 = 'tall';
// Assign an adjective
let adj5 = 'round';
// Assign an adjective
let adj6 = 'long';
// Assign an adverb
let adverb = 'fast';
// Assign a color
let color = 'red';
// Assign a noun
let noun1 = 'church';
// Assign a noun
let noun2 = 'daughter';
// Assign a noun
let noun3 = 'square';
// Assign a noun
let noun4 = 'library';
// Assign a noun
let noun5 = 'ball';
// Assign a noun
let noun6 = 'cake';
// Assign a number
let num = '14';
// Assign a plural noun
let pnoun1 = 'carrots';

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE



//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(story);











