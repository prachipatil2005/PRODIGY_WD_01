let menuIcon = document.querySelector("#menu-icon");
let ul = document.querySelector("ul");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    ul.classList.toggle("active");
}

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
let submitButton = document.querySelector(".submit-btn");
let form = document.querySelector("form");
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    
    alert("Your form has been submitted!");
    form.reset();//reset previous text
});
