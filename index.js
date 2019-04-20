const fs = require('fs');
const readline = require('readline');
const readlineSync = require('readline-sync');

const category = readlineSync.question('What is the category name? :');
const keywords = readlineSync.question('Write the words with the comma between them (example, example1, example example) :');
const keywordsArray = keywords.split(',').map(keyword =>
  keyword
    // Remove whitespace from both sides of a string
    .trim()
    // Convert the string to lowercase letters
    .toLocaleLowerCase()
);

const rl = readline.createInterface({
  input: fs.createReadStream('football'),
  crlfDelay: Infinity
});

rl.on('line', line => {
  // Convert the string to lowercase letter
  const lowercaseLine = line.toLocaleLowerCase();

  // Check if the line contains keywords
  if (keywordsArray.some(keyword => lowercaseLine.includes(keyword))) {
    // add the search in the new category
    fs.appendFile(category, `${line}\n`, () => console.log(line));
  }
});
