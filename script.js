//Making button press change names

let player1 = "Player 1"

function changeName(){

    player1 = prompt ("What is Player 1's Name?")

    document.querySelector("p.Player1").innerHTML = player1;
}

let player2 ="Player 2"

function changeName2(){
    
    player2 = prompt ("What is Player 2's Name?")

    document.querySelector("p.Player2").innerHTML = player2;

}