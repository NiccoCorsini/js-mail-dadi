/*
****MAIL****

1 Ask the user's mail
2 Check if the mail is in the list
3 Print check result

****DICE GAME****

1 Generate a random number from 1 to 6 for pc and for player
2 The winner have the highest score
*/

//MAIL
function mail() {

    var mailList = ["lorenzo@gmail.com", "fabio@gmail.com", "paolo@gmail.com"];

    var email = prompt("Please enter your email address");

    var emailFound = false;

    for(var i = 0; i < mailList.length; i++){
        if(mailList[i] === email.toLowerCase()){
        emailFound = true;
        break;
        } 
    }

    if(emailFound){
        alert("Your email is valid");
    }
    else{
    alert("The inserted mail is incorrect. retry");
    mail();
    }
}


//DICE
function dice() {

    var userNumber = Math.floor(Math.random() * 6) + 1;
    alert("Your number is: " + userNumber);

    var pcNumber = Math.floor(Math.random() * 6) + 1;
    alert("The pc number is: " + pcNumber);

    if(userNumber > pcNumber){
        alert("Hai vinto!");
    }
    else if(userNumber < pcNumber){
        alert("Hai perso!");
    }
    else{
        alert("Pareggio!");
    }

}



