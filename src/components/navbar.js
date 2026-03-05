```javascript
// Dark Mode Toggle

const themeIcon = document.querySelector(".theme-icon");

themeIcon.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
    else{
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

});


// Active Navbar Link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function(){

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });
});
```
