// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...


// function to activate 3 light colors

function turnItRed() {
    //remove bulb
    document.querySelector("#stopLight").classList.remove("bulb");
    //target stopLight ID to change class
    document.querySelector("#stopLight").classList.add("bulbRed");
    
    
}

//function to activate no light

//turn light red


//add event
document.querySelector("#stopButton").addEventListener("click", turnItRed);