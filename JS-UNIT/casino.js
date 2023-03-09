//do while loop either bet or quit //
// const flip = Math.random() < 0.5 ? 'H' : 'T';
// add to function to get random coin flip

// set a starting balance of $10.00 //
//write a function to randomly return h or t /
// write function to add bet to a balance /
// write a function to subtract bet from balance /

// hint: before they bet make sure they have enough money! /
//until user runs out or cashes out: /
//  ask how much they would like to bet /
//  ask if theyd like heads or tails /
//  call the function to return the random flip /
//  if user hits, add bet to their balance
// if wrong, subtract bet to their balance

//--------WRITING IT OUT----------
// bet or leave? 
// while betting, ask for wager, flip coin, award money, ask to leave or bet again
//if leave, cash out, if bet, continue

//take their choice, return it into makeBet

// while they want to NOT, not while balance is positive
// how to make betting a boolean
//------------------

const prompt =require('prompt-sync')();

let balance = 10;


function flipCoin() {
    const flip = Math.random() < 0.5 ? 'H' : 'T';
    return flip;
}

function addBet(bet) {
    balance = balance + bet;
}

function subtractBet(bet) {
    balance = balance - bet;
}

do {
    const betAmount = prompt('How much would you like to bet?');
    const headsOrTails = prompt('Heads or tails? (H/T)');

    const houseFlip = flipCoin();

    if (headsOrTails === houseFlip) {
        console.log(`House flipped ${houseFlip}, You called: ${headOrTails} `)

        addBet(betAmount);
    } else {
        console.log(`You didn't call the right one.`)
    }

} while (balance > 0);

// let betting = false;

// let question1 = prompt("Would you like to bet today? (Y/N)");

// betting = question1 === Y ? true : false
// if (betting) {
//     do {
//         let bet = prompt("Hello player! How much would you like to bet? ");
    
//         if (balance < bet) {
//             console.log("You don't have enough money! Get outa here!");
//             break;
//         }
    
//         console.log(`${bet}`);
    
//         let flipQ = prompt("Heads or Tails? (Type 'H' or 'T') ");
    
//         console.log(`You chose ${flipQ}`);
       
    
//         if (coinFlip(flipQ)) {
//             addBet(bet);
//             console.log(`Congratulations! You won the bet and ${bet} dollars has been added to your balance.`)
//         } else {
//             subtractBet(bet);
//             console.log(`So sorry! You lost the bet and ${bet} dollars has been subtracted from your balance.`)
//         }
    
//         console.log(`Your balance is ${balance}`);
        
    
//     } while (balance > 0);
// }
    
//     if (balance <= 0) {
//     console.log("You are out of money. The house always wins!");
//     }