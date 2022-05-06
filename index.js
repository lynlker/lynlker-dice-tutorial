// Dice Variables
let dice1 = document.querySelector("img.img1");
let dice2 = document.querySelector("img.img2");
// Title Variable
let title = document.querySelector("h1.title");

// Function Start
function changeDices(){
    // Random Number Variables
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // Set the dice images based on the random numbers
    dice1.setAttribute("src", `images/dice${randomNumber1}.png`);
    dice2.setAttribute("src", `images/dice${randomNumber2}.png`);
    // Calculate who wins based on the result and display it on the title
    if (randomNumber1 > randomNumber2){
        title.innerHTML = "🚩Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        title.innerHTML = "Player 2 Wins!🚩";
    }
    else{
        title.innerHTML = "🚩Draw!🚩";
    }
}