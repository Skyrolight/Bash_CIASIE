let randomNumber = 12 //Math.floor(Math.random() * (99 - 1 + 1) + 1)
let response = document.getElementById("response");
let tryNumber = 0;

function game() {
    let userInput = document.getElementById("userNumber").value;

    if (!(userInput > 99 || userInput < 1)) {
        if (randomNumber < userInput) {
            response.innerHTML = "le nombre a trouver est plus petit"
            tryNumber++
        } else if (randomNumber > userInput ) {
            response.innerHTML = "le nombre a trouver est plus grand"
            tryNumber++
        } else {
            response.innerHTML = `Félicitations, vous avez trouvé le nombre mystère en ${tryNumber} tentatives !`
        }
    } else {
        response.innerHTML = "Veuillez saisir un nombre entre 1 et 99"
    }
}