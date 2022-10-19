function getRandomNumber() {
    return Math.floor(Math.random() * (99 - 1 + 1) + 1)
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setHistory(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function game(randomNumber, tryNumber) {
    let key = (Object.keys(localStorage).length) - 1;
    const highscore = getLocalStorage('highscore');
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
            console.log('Bravo!');
            console.log(`Vous avez trouvé le nombre en: ${tryNumber} coup\(s)`);

            let userName = prompt("Entrez votre pseudo :");
            const data = {
                userName,
                tryNumber
            };

            setHistory(`userName${key}`, data)
            if (tryNumber < highscore) {
                localStorage.setItem('highscore', tryNumber);
                console.log("Vous détenez le recors !");
            }
        }

    } else {
        game(randomNumber, tryNumber);
    }
}

function initGame() {
    const randomNumber = 12;
    let tryNumber = 0;
    let highscore = getLocalStorage('highscore');

    if (highscore === null || highscore == "999" ) {
        localStorage.setItem('highscore', 999);
        console.log("Il n'y a pas de high score")
    } else {
        console.log(`Le high score est de : ${highscore}`);
    }

    game(randomNumber, tryNumber);
}

initGame()
