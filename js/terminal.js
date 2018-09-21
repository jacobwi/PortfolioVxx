var position = 0;
var speedBackground = 20;
var strBackground = document.getElementById("background-info").innerText;

// Empty the string to apply the effect
document.getElementById("background-info").innerText = '';

function typeIt() {
    if (position < strBackground.length) {
        document.getElementById("background-info").innerText += strBackground.charAt(position);
        position++;
        setTimeout(typeIt, speedBackground);
    }
}

setTimeout(typeIt, speedBackground);
function blinker() {
    $('.blinking-cursor').fadeOut(500);
    $('.blinking-cursor').fadeIn(500);
}
setInterval(blinker, 1000);
