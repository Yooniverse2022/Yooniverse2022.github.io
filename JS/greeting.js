const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function onLogin(event){
    event.preventDefault();
    const loginName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginName);
    showGreeting(loginName);    
}

function showGreeting(loginName){
    greeting.innerText = `Hello ${loginName}! Welcome back!`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if(savedName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogin);
} else{
    showGreeting(savedName);
}


