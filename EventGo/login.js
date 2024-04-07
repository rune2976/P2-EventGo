// Login form ting (skal aldrig be om at finde ud af det her lort igen)

const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "homepage.html"
    }else{
        alert("Forkert information")
    }
})

// function til at checke korrekt information, og vælge admin login

function authentication(username,password){
    if(username === "admin" && password === "admin123"){
        return true
    }else{
        return false
    }
}

