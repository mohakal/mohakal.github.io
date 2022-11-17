const readline = require('readline');
const  i1 = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
// const  i2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
i1.question('What is your name? ', name => {
console.log(`Welcome ${name}`);
    i1.question('What is your age? ', age => {
        age < 16 ? console.log("You're not allowed to drive in Iowa") : console.log("You're allowed to get a drivers license in Iowa");

        i1.close();
    });

});

