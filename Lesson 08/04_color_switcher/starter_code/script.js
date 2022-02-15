

// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

// Function to turn on graymode
function turnItGrey(){
    // Target body tag and set the class to be grey
    document.querySelector('body').classList.add('grayMode');
}

// Function to turn on light mode
function turnItLight(){
    // Target body tag and remove the gray class
    document.querySelector('body').classList.remove('grayMode');

}


// Listen for click on gray button
document.querySelector("#grayButton").addEventListener("click",turnItGrey);

// Listen for click on white button
document.querySelector("#whiteButton").addEventListener("click",turnItLight);


var titleH1 = document.getElementById("heading");


let x = 5;

var equation = 10*10;

const person = "Me, myself, and I";

console.log(person);