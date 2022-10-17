const randomNumber = 12
let tryNumber = 0;
game()

function getRandomNumber() {
    return Math.floor(Math.random() * (99 - 1 + 1) + 1)
}

function game() {
    tryNumber++;
    let userValue = prompt("Entrez une valeur entre 1 et 99:");

    if (!(userValue < 1 || userValue > 99)) {
        if (randomNumber < userValue) {
            console.log("le nombre à trouver est plus petit")
        } else {
            console.log("le nombre à trouver est plus grand")
        } 

        if (userValue != randomNumber) {
            game();
        } else {
            console.log('Bravo!')
            console.log(`Vous avez trouvé le nombre en: ${tryNumber} coup\(s)`)
        }

    } else {
        game();
    }
}
