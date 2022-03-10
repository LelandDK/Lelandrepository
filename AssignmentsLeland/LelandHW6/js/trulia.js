

let truliaCards = document.getElementsByClassName("trulia-grid-item");


//When documents loads, remove featured class from each card and then add it back to user-chosen card.

//Add to document the DOM Content Loaded event listener and make the handler a function that prevents dom-loaded default action, removes feature class from each card, and adds feature class back to user chosen card.

//Add event listener and handler (where heandler will be decalred within method)
document.addEventListener('DOMContentLoaded', function(event) {

    //declare function for handler
    function addFeatureStyle(e) {
        // Prevent document-content-loaded default
        e.preventDefault();

        //Loop through cards to remove featured class from each card
        for(i=0; i<truliaCards.length; i++) {
        truliaCards[i].classList.remove("trulia-featured-grid-item"); 
        }

        //Add back featured class to user-chosen card    
        this.classList.add("trulia-featured-grid-item");
    
    }

    //Loop through cards to add click event to each card in array and run function declared above.
    for(let i=0; i<truliaCards.length; i++) {
        truliaCards[i].addEventListener("click", addFeatureStyle);

    }
   
  
 

  //When user clicks burger, the value of trulia-nav-mobilehide height property should change to "auto"

      //Add click event to the burger element  
      //Start by targeting burger by its class and place in variable
      let burger = document.querySelector(".trulia-nav-toggle");

      let mainNav = document.querySelector(".trulia-nav-mobilehide");
      //Create a function for handler
      function changeHeightValue() {
        mainNav.style.height="auto";
        
      }
      

      //Add click event and define handler as a function
      burger.addEventListener("click", changeHeightValue);

    });  

  //Question: How do I add another click event so that the green mainNAv menu closes when the burger is clicked again?  Would I use a conditional?

