
// Get references to the input elements
const myBox = document.getElementById("myBox");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email_id");
const psw = document.getElementById("psw");




//handle the blure event 
fname.addEventListener("blur", function() {

    //check if the input text is empty 
    if(fname.value.trim() === "") {
        alert("First name cannot be empty!");
        fname.style.borderColor = "red";
    }else {
        fname.style.borderColor = "";
    }
});

lname.addEventListener("blur", function(){

    if(lname.value.trim() === "") {
        alert("Last name cannot be empty");
        lname.style.borderColor = "red";
    }else {
        lname.style.borderColor = "";
    }
});

email.addEventListener("blur", function(){

    if(email.value.trim() === "") {
        alert("Email input cannot be empty");
        email.style.borderColor = "red";
    }else {
        email.style.borderColor = "";
    }
});

psw.addEventListener("blur", function(){

    if(psw.value.trim() === "") {
        alert("Password input cannot be empty");
        psw.style.borderColor = "red";
    }else {
        psw.style.borderColor = "";
    }
});






myBox.addEventListener("click", changeColor);