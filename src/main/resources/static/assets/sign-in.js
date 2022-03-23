function logInSucess() { // check if the log in is success, and post to server
    let form = document.querySelector("#logInForm")
    form.submit()
    return true
}

$(".info-item .btn").click(function () { // switch to sign up
    $(".container").toggleClass("log-in") // play animation
    document.querySelector(".warning").innerHTML = ""
});
$(".container-form .btn").click(function () { // when the form is completed
    if (logInSucess()) { // if the log in going OK
        $(".container").addClass("active") // play animation
        window.location.href = "#" // skip to success page
    } else { // if the log in is not success
        $(".warning").addClass("display-warning") // display warning
        var chances = 3 // chances to try
        // TODO
        // get the amount of chances to try from server


        if (chances > 0) {
            document.querySelector(".warning").innerHTML = "<p>Sorry, unknow user or password.</p> <p>You have " + chances.toString() + " chances to try</p>"
        }
        else {
            document.querySelector(".warning").innerHTML = "<p>Sorry, you (your ip) tried too many times!</p> <p>Wait for one minute and try again!</p>"
        }
        anime({
            targets: ".container",
            keyframes: [
                {translateX: 600},
                {translateX: -520},
                {translateX: 440},
                {translateX: -360},
                {translateX: 320},
                {translateX: -240},
                {translateX: 160},
                {translateX: -80},
                {translateX: 80},
                {translateX: 0},
            ],
            duration: 350,
            easing: 'easeOutElastic(1, .8)',
        })
    }
});
$("")
