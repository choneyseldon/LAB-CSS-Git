const container = document.querySelector(".container"),
    pwhidePWD = document.querySelectorAll(".hidePWD"),
    pwfields = document.querySelectorAll(".password");

pwhidePWD.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwfields.forEach(pwfield => {
            if (pwfield.type === "password") {
                pwfield.type = 'text';

            } else {
                pwfield.type = "password";
            }
        })
    })
})