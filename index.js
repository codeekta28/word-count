console.log("This is index.js file");
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    let userInputValue = document.querySelector("#wordCount").value;
    if (userInputValue == "") {
        validation("You cant keep the box empty", "danger");
    } else {
        let wordLength = calculatingNoOfWords(userInputValue);
        document.querySelector("#wordCountOutput").innerHTML = wordLength;
        setTimeout(() => {
            clearFields();
        }, 5000);
        
    }
})
function validation(message, status) {
    document.querySelector(".error").innerHTML = message;
    document.querySelector(".error").classList.add(`alert-${status}`);
    setTimeout(() => {
        document.querySelector(".error").style.display = "none";
    }, 2000);
}
function calculatingNoOfWords(userInputValue) {
    return userInputValue.length;
}
function clearFields(){
    document.querySelector("#wordCount").value="";
}