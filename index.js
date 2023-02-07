let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function highlighter(){
    if (homeCount > guestCount){
        document.getElementById("home-score").style.border = "2px yellow solid";
        document.getElementById("guest-score").style.border = "2px black solid";
    }

    else if (guestCount > homeCount){
        document.getElementById("guest-score").style.border = "2px yellow solid";
        document.getElementById("home-score").style.border = "2px black solid";
    }

    else{
        document.getElementById("guest-score").style.border = "2px black solid";
        document.getElementById("home-score").style.border = "2px black solid";
    }
}

function plusOneHome(){
    homeCount += 1;
    homeScore.textContent = homeCount; 
    highlighter(); 
}

function plusTwoHome(){
    homeCount += 2; 
    homeScore.textContent = homeCount;
    highlighter();
}

function plusThreeHome(){
    homeCount += 3;
    homeScore.textContent = homeCount;
    highlighter();
}

function plusOneGuest(){
    guestCount += 1;
    guestScore.textContent = guestCount;
    highlighter();
    
}

function plusTwoGuest(){
    guestCount += 2; 
    guestScore.textContent = guestCount;  
    highlighter();
}

function plusThreeGuest(){
    guestCount += 3;
    guestScore.textContent = guestCount;   
    highlighter();      
}

function newGame(){
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    highlighter();
}




