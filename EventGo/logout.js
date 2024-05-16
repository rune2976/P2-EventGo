// Logout form

const logoutBtn = document.querySelector(".logout-btn")

logoutBtn.addEventListener("click",()=>{
    window.location.replace("login.html")
})

window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
  
    // Viser footer'en, hvis brugeren er i bunden af siden
    if (scrollPosition + windowHeight >= documentHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });