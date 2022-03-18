// http://www.omdbapi.com/?i=tt3896198&apikey=1dd13812

let data = null

// Target the results
let results = document.querySelector("#results")

let inputField = document.querySelector("#seachField")

let apikey = "4fb937ca"


function cardRepeat(title, poster, year, type, element, index){

    // There is a sample of the snipped in the html as a comment
    let snippet = '';
    element.innerHTML+= snippet
}




document.querySelector("#searchMovies").addEventListener("click", async function(e){
    
    // Stop the default behavior
e.preventDefault;

    // Make the results an empty Div
    results.innerHTML = "<div></div>"

    // Insert GET function to retrieve a list of movies

    let fetchURL = "http://www.omdbapi.com/?i=tt3896198&apikey=4fb937ca=" + apikey + "&#s"
    
    // Format the results as JSON
    


    // Loop through your data and use the cardRepeat() function to add a new movie to the displayed list.


        // Loop through the newly created cards

        
        // Create a click event for each card
        
           
            // insert post function to submit the ID of the card clicked

                // Create request options for a POST method
            
                // Run the post and wait for the answer
            

            // shows what has been clicked on by setting the .hiddenClick item to have a display of block
            
        

})





