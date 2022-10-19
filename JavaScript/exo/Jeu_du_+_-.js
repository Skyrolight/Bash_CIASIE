function getRandomNumber() {
    return Math.floor(Math.random() * (99 - 1 + 1) + 1)
}

function getHighscore(id) {
    var test = JSON.parse(localStorage.getItem("history"));
    return test;
}

function game(randomNumber, tryNumber) {
    // console.log(getHighscore());
    tryNumber++;
    let userValue = prompt("Entrez une valeur entre 1 et 99:");

    if (!(userValue < 1 || userValue > 99)) {
        if (randomNumber < userValue) {
            console.log("le nombre à trouver est plus petit")
        } else {
            console.log("le nombre à trouver est plus grand")
        } 

        if (userValue != randomNumber) {
            game(randomNumber, tryNumber);
        } else {
            console.log('Bravo!')
            console.log(`Vous avez trouvé le nombre en: ${tryNumber} coup\(s)`)
            let userName = prompt("Entrez votre pseudo :");
            localStorage.setItem('history', [`${userName}, ${tryNumber}`]);
        }

    } else {
        game(randomNumber, tryNumber);
    }
}

function initGame() {
    const randomNumber = 12;
    let tryNumber = 0;
    const datas = ['', 999];

    if (localStorage.getItem('history') === null) {
        localStorage.setItem('history', JSON.stringify(datas));
    }

    game(randomNumber, tryNumber);
}

initGame()
