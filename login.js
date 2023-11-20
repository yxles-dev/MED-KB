function logindiv() {
    const audio = document.getElementById('clickAudio');
    const audioClone = audio.cloneNode(true);
    audioClone.play();
    var x = document.getElementById("logindiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function registerdiv() {
    const audio = document.getElementById('clickAudio');
    const audioClone = audio.cloneNode(true);
    audioClone.play();
    var y = document.getElementById("registerdiv");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const audio = document.getElementById('hoverAudio');

button1.addEventListener('mouseover', () => {
    const audioClone = audio.cloneNode(true);
    audioClone.play();
});

button2.addEventListener('mouseover', () => {
    const audioClone = audio.cloneNode(true);
    audioClone.play();
});