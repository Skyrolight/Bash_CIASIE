let randomNumber = 12 //Math.floor(Math.random() * (99 - 1 + 1) + 1)
let response = document.getElementById("response");
let tryNumber = 0;
const TRYMAX = 5;
const HIGHSCORE_MAX = 5;

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


        }
    } else {
        response.innerHTML = "Désolé, vous avez fait trop de tentatives ! "
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
