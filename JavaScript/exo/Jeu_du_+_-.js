let randomNumber = 12

function game() {
    let userInput = document.getElementById("userNumber").value;

    if (randomNumber < userInput) {
        console.log("le nombre à trouver est plus petit")
    } else {
        console.log("le nombre à trouver est plus grand")
    } 

}