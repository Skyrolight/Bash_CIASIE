let content = document.getElementById("number");

function getUserInput() {
    let userInput = document.getElementById("userNumber").value;
    content.innerHTML = `<p> ${userInput} </p>`;
}
