const readline = require('readline');

const prompter = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

function readPrompt() {
  prompter.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
  });
  prompter.on('close', () => {
    console.log('This important software is now closing');
  });
}

readPrompt();
