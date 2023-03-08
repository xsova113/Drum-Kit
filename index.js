var numberOfDrumButtons = document.querySelectorAll(".drum");
// var audio = new Audio("sounds/tom-1.mp3");
function audioPlayed(audioName) {
    new Audio("sounds/" + audioName + ".mp3").play();
}

numberOfDrumButtons.forEach(i => {
    i.addEventListener("click", (e) => {
        var buttonInnerHTML = e.target.innerHTML;
        // e.target.style.color = "white";
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
});

document.addEventListener("keydown", (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            audioPlayed("tom-1");
            break;
        case "a":
            audioPlayed("tom-2");
            break;
        case "s":
            audioPlayed("tom-3");
            break;
        case "d":
            audioPlayed("tom-4");
            break;
        case "j":
            audioPlayed("snare");
            break;
        case "k":
            audioPlayed("crash");
            break;
        case "l":
            audioPlayed("kick-bass");
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
