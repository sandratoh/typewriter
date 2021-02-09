const sentence = 'hello there from lighthouse labs';

let delay = 0;

for (const char of sentence) {
  delay += 50;

  const lastChar = sentence[sentence.length - 1];
  // console.log(lastChar);
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);



  // setTimeout(() => {
  //   if (char !== sentence[sentence.length - 1]) {
  //     process.stdout.write(char);
  //   } else {
  //     process.stdout.write(char + '\n');
  //   }
  // }, delay);


}



