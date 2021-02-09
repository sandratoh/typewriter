const sentence = 'hello there from lighthouse labs';

let delay = 0;

for (const char of sentence) {
  delay += 50;

  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);


// Alt method: C Style loop and set new line as condition inside loop
// for (let i = 0; i < sentence.length; i++) {
//   delay += 50;

//   setTimeout(() => {
//     if (i !== sentence.length - 1) {
//       process.stdout.write(sentence[i]);
//     } else {
//       process.stdout.write(sentence[i] + '\n');
//     }
//   }, delay);
// }