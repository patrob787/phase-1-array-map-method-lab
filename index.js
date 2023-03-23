const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const splitLines = tutorials.map((line) => {
    return line.split(' ')
  });
  for (let block of splitLines) {
  let newString = block.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ');
    tutorials.shift();
    tutorials.push(newString);
  };
  return tutorials
};

titleCased();