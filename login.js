var tries = 0;

function closeDiv(divId) {
    console.log("Hello World!");
    const audio = document.getElementById('clickAudio');
    const audioClone = audio.cloneNode(true);
    audioClone.play();
    var x = document.getElementById(divId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    controlBGM();
    document.getElementById("controls").style.display = "block";
}

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

function clickSound() {
    const audio = document.getElementById('clickAudio');
    const audioClone = audio.cloneNode(true);
    audioClone.play();
}

/* Background Music */
function controlBGM() {
    const bgm = document.getElementById('loginBGM');
    const bgmControl = document.getElementById('bgmControl');
    console.log(bgm.pause);
    if (bgm.duration > 0 && !bgm.paused) {
        console.log("pausing bgm");
        bgm.pause();
        bgmControl.innerHTML = "<img src='res/loginpage/musicnote.svg' style='width: 25px; height: 25px; fill='#ff0000';'/>";
    } else {
        console.log("playing bgm");
        bgm.play();
        bgmControl.innerHTML = "<img src='res/loginpage/musicnoteslash.svg' style='width: 25px; height: 25px; fill='#ff0000';'/>";
    }
}

const button = document.getElementsByClassName("buttons");
const audio = document.getElementById('hoverAudio');

button[0].addEventListener('mouseover', () => {
    const audioClone = audio.cloneNode(true);
    audioClone.play();
});

for (var i = 0 ; i < 3; i++) {
    button[i].addEventListener('mouseover', () => {
        const audioClone = audio.cloneNode(true);
        audioClone.play();
    });
}

function print() {
    var file = document.getElementById("myFile").files[0];
    console.log(file);
}


function validateLogin() {
    var username = document.getElementById('fname').value;
    var password = document.getElementById('password').value;

    console.log(username);
    console.log(password);
    console.log(tries);

    if (tries < 3) {
        if (username === 'Debug' && password === 'debug') {
            tries++;
            alert('Login successful');
            window.location.href = 'game/mainmenu.html';
        } else {
            tries++;
            alert('Wrong account credentials. Please try again.');
        }
    } else {
        alert('tries exceeded 3 times');
    }
}
