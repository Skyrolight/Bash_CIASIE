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
            show()
        }
    } else {

        response.innerHTML = "Veuillez saisir un nombre entre 1 et 99"
    }
}

function setHighscore() {
    let userName = document.getElementById("userName").value;
    localStorage.setItem(userName, tryNumber);
}

let tablebody = document.getElementById("tablebody")
for( let i = 0; i < localStorage.length; i++){
    let name = localStorage.key(i)
    tablebody.innerHTML += `<tr><td>${name}</td> <td>${localStorage[name]}</td></tr>`
}


let divGetName = document.getElementById("userDiv");
function show() {
    divGetName.style.display = 'block';   
}

function hide() {
    divGetName.style.display = 'none';   
}

//function

function resetScores () {
    localStorage.clear();
}

function scoreBy(name) {
    console.log(localStorage.getItem(name));
}

function scores() {
    for( let i = 0; i < localStorage.length; i++){
        let name = localStorage.key(i)
        let score = localStorage[name]
        console.log(`${name} : ${score} tentatives`)
    }
}