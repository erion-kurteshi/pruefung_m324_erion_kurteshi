import chalk from 'chalk';

const myVariable = 42; // Fixed 'prefer-const' by using const
if (
  myVariable ===
  '42'
) {
  // Fixed 'eqeqeq' by using strict equality (===)
  console.log(
    chalk.blue(
      'It works',
    ),
  );
}
