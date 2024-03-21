//1. variable banaty he
//2. condition
//3. incriment ya decriment

//simple loop
// for ( var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// square of 1 to 10 numbers
// for ( var i = 1; i <= 10; i++) {
//     console.log(i*i);
// }


// square of 1 is 1
// square of 2 is 4
// square of 3 is 9
// for ( var i = 1; i <= 10; i++) {
//     console.log( "square of "+i +"is"+i*i);
// }

//print even numbers only
// for ( var i = 1; i <= 10; i++) {
//     if (i % 2==0){
//         console.log(i+ 'is even number');
//     }
// }

//print odd numbers only
// for ( var i = 1; i <= 10; i++) {
//     if (i % 2==1){
//         console.log(i+ 'is odd number');
//     }
// }

// print table of 4 from 1 to 10
// for ( var i = 1; i <= 10; i++) {
//     console.log(4+"*"+i+"="+(4*i));
//     console.log(i+"\n");
// }


// for (let i = 2; i <= 10; i++) {
//     console.log(`Table of ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//       let result = i * j;
//       console.log(`${i} x ${j} = ${result}`);
//     }
//     console.log("\n");
//   }

function createDiamond(rows) {
    let middle = Math.floor(rows / 2) + 1;
    let diamond = '';
  
    // Generate the top half of the diamond
    for (let i = 1; i <= middle; i++) {
      let padding = ' ';
      let spaces = ' ';
      for (let j = 1; j <= middle - i; j++) {
        padding += ' ';
      }
      for (let k = 1; k <= i * 2 - 1; k++) {
        spaces += '*';
      }
      diamond += padding + spaces + '\n';
    }
  
    // Generate the bottom half of the diamond
    for (let i = middle - 1; i >= 1; i--) {
      let padding = ' ';
      let spaces = ' ';
      for (let j = 1; j <= middle - i; j++) {
        padding += ' ';
      }
      for (let k = 1; k <= i * 2 - 1; k++) {
        spaces += '*';
      }
      diamond += padding + spaces + '\n';
    }
  
    return diamond;
  }
  
  console.log(createDiamond(5));