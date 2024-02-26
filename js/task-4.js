const loginForm = document.querySelector("form.login-form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const email = loginForm.querySelector('input[name="email"]').value.trim();
    const password = loginForm.querySelector('input[name="password"]').value.trim();
    if (!email || !password) {
        alert("All form fields must be filled in")
    } else {
        const returnInfo = {
            email: email,
            password: password
        }
        console.log(returnInfo);
        loginForm.reset();
    }
}






