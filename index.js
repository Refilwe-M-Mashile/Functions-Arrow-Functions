const terminal = require("readline-sync");
const user = {
  username: "",
  points: 0,
  stage: 1,
};

let target = Math.round(Math.random() * 2);

function getUsername() {
  user.username = terminal.question("Enter your username: ");
  // terminal.question();
  console.log(`
    ***************************
    Welcome to the game ${user.username}
    Stage: ${user.stage}
    points: ${user.points} 
    ****** Let's Play!!! ******`);
  target = Math.floor(Math.random() * 2);
}

function continuePlaying() {
  let input = terminal.question("Enter 'X' to exit or 'P' to Play: ");
  if (input == "X" || input == "x") {
    console.log("Exiting>>> G A M E  O V E R");
    process.exit(0);
  } else if(input == "P" || input == "p")playGame(range);
  else{
    console.error("invalid Input");
    continuePlaying();
  }
}

function playGame(range) {
  let answerNum = +terminal.question(
    `Guess the number! (1-${user.stage + 1}): `
  );

  if (answerNum === target) {
    user.stage += 1;
    user.points += 1;
    range += 1;
    console.log("C O N G R A T U L A T I O N S ! ! !");
    console.log(`
      ***************************
      ${user.username}'s stats:
      Stage: ${user.stage}
      points: ${user.points} 
      ******              ******`);

    target = Math.floor(Math.random() * user.stage + 1);
    continuePlaying();
  } else {
    console.log("That was incorrect, Please Try again");
    playGame(user.stage + 1);
  }
}
//get username
getUsername();
//set range
let range = 2;
//play game
playGame(range);
