/*SLIDE MENU */

/* .mobileNavHide's width default position is 0vw */

/*Hav mobileNavHide's element expand when user clicks on "menu" */
    /* Target "menu" and place in variable */
    
    let menuIcon = document.querySelector(".mobileMenuLink");
    
    /*Add listening Event to menuIcon and make handler a function mobileMenuShow() */

    menuIcon.addEventListener("click", mobileMenuShow);

    /* Declare mobileMenuShow function */
    function mobileMenuShow() {
        let hiddenMenu = document.querySelector(".mobileNavHide"); /*targets .mobileNavHide element */
        hiddenMenu.classList.add("mobileNavShow"); /* adds new styled class that expands menu */
      }

/* Have mobileNavHide's element shrink when user clicks "X" or "Home"*/
      /*Target "X" and "Hone" and place in variables */
      let xIcon = document.querySelector(".X-out"); 
      let homeIcon = document.querySelector(".homePageLink");

      /*Add listening Event to xIcon homeIcon and make handlers a function mobileMenuHide() */
      xIcon.addEventListener("click", mobileMenuHide);
      homeIcon.addEventListener("click", mobileMenuHide);

      /*Declare mobileMenuHide fucntion */
      function mobileMenuHide() {
        let hiddenMenu = document.querySelector(".mobileNavHide"); /*targets .mobileNavHide element */
        hiddenMenu.classList.remove("mobileNavShow"); /* deletes new styled class that expands menu */

      }