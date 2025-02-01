let first_page = document.getElementById("b1");
let snd_page = document.getElementById("c1");
let email = document.getElementById("mail");
let result = document.getElementById("acpt");
let answer = document.getElementById("exit");
let msg_err = document.getElementById("err");

snd_page.style.display = "none";

result.onclick = function res(){
    var ace = email.value;

    if (ace == "" || ace.length <= 15){
        alert("Veuillez entrez une addresse email valide ");
        email.style.backgroundColor = "hsl(4, 90%, 95%)";
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.color = "hsl(4, 100%, 67%)";
        msg_err.innerHTML = "Valid email required";
    }
    else{
        first_page.style.display = "none";
        snd_page.style.display = "block";
        answer.innerHTML = `${ace}`;
    }
}
