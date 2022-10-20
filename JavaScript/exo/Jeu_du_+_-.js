function resetScores () {
    localStorage.clear();
}

function scoreBy(id) {
    let key = `userName${id}` 
    console.log(localStorage.getItem(key));
}

function run() {
    initGame()
}

function scores() {
    let key = (Object.keys(localStorage).length) - 1;
    for (let i = 0; i < key; i++) {
        console.log(localStorage.getItem(`userName${i}`));
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * (99 - 1 + 1) + 1)
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setHistory(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function game(randomNumber, tryNumber, TRY_MAX, CHAR_MAX, SCORE_MAX) {
    let key = (Object.keys(localStorage).length) - 1;
    let userName = "";
    const highscore = getLocalStorage('highscore');
    tryNumber++;

    while (!(TRY_MAX < tryNumber)) {
        let userValue = prompt("Entrez une valeur entre 1 et 99:");
        if (!(userValue < 1 || userValue > 99)) {
            if (randomNumber < userValue) {
                console.log("le nombre à trouver est plus petit")
            } else {
                console.log("le nombre à trouver est plus grand")
            } 
    
            if (userValue != randomNumber) {
                game(randomNumber, tryNumber, TRY_MAX, CHAR_MAX, SCORE_MAX);
            } else {
                console.log('Bravo!');
                console.log(`Vous avez trouvé le nombre en: ${tryNumber} coup\(s)`);
                do {
                    userName = prompt("Entrez votre pseudo :");
                } while (CHAR_MAX < userName.length);

                const data = {
                    userName,
                    tryNumber
                };
                
                if (((Object.keys(localStorage).length) - 1) < SCORE_MAX) {
                    setHistory(`userName${key}`, data)
                }

                if (tryNumber < highscore) {
                    localStorage.setItem('highscore', tryNumber);
                    console.log("Vous détenez le recors !");
                }

                exit()
            }
    
        } else {
            game(randomNumber, tryNumber, TRY_MAX, CHAR_MAX, SCORE_MAX);
        }
    }

    console.log("Vous avez atteins la limite !");
    console.log("partie terminé");
    exit();
}

function initGame() {
    let randomNumber = 0;
    let tryNumber = 0;
    let highscore = getLocalStorage('highscore');
    const TRY_MAX = 10;
    const CHAR_MAX = 20;
    const SCORE_MAX = 5;

    if (highscore === null || highscore == "999" ) {
        localStorage.setItem('highscore', 999);
        console.log("Il n'y a pas de high score")
    } else {
        console.log(`Le high score est de : ${highscore}`);
    }

    let difficulty = prompt("Entrez une difficulté: \n1. Facile\n2. Moyen\n3. Difficulty");
    
    switch (difficulty) {
        case '1':
            randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)
            break;
        case '2':
            randomNumber = Math.floor(Math.random() * (25 - 1 + 1) + 1)
            break;
        case '3':
            randomNumber = Math.floor(Math.random() * (99 - 1 + 1) + 1)
            break;
        default:
            randomNumber = Math.floor(Math.random() * (99 - 1 + 1) + 1)
            break;
    }
    
    console.log(randomNumber)
    game(randomNumber, tryNumber, TRY_MAX, CHAR_MAX, SCORE_MAX);
}

initGame()
