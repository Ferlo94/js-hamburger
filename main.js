const hamburger = document.getElementsByClassName("hamburger-menu")[0];
const open = document.getElementById ("open-menu");
const close = document.getElementById ("close-menu");

open.addEventListener ('click', 
    function () {
        hamburger.style.display = "block";
    }
)

close.addEventListener ('click', 
    function () {
        hamburger.style.display = "none";
    }
)