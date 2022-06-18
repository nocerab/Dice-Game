//Making button press change names

let player1 = "Player 1"

function changeName(){

    player1 = prompt ("What is Player1's name")

    document.querySelector("p.Player1").innerHTML = player1;
}