
// Get references to the input elements
const myBox = document.getElementById("myBox");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email_id");
const psw = document.getElementById("psw");
const btn = document.getElementById("btn");




//handle the blure event 
fname.addEventListener("blur", function() {

    //check if the input text is empty 
    if(fname.value.trim() === "") {
        fname.style.borderColor = "red";
    }else {
        fname.style.borderColor = "";
    }
});

lname.addEventListener("blur", function(){

    if(lname.value.trim() === "") {
        lname.style.borderColor = "red";
    }else {
        lname.style.borderColor = "";
    }
});

email.addEventListener("blur", function(){

    if(email.value.trim() === "") {
        email.style.borderColor = "red";
    }else {
        email.style.borderColor = "";
    }
});

psw.addEventListener("blur", function(){

    if(psw.value.trim() === "") {
        psw.style.borderColor = "red";
    }else {
        psw.style.borderColor = "";
    }
});

btn.addEventListener("click", function(){

    if(fname.value.trim() === "" && lname.value.trim() === ""
        && email.value.trim === "" && psw.value.trim() === "") {
            alert("You have successfully saved the info");
    }else {
        alert("You should first enter your info");
    }
});








myBox.addEventListener("click", changeColor);