console.log("Hello World");
const loadBar = document.getElementById('loadbar');


function increaseProgress() {
    let currentProgress = parseFloat(getComputedStyle(loadBar).getPropertyValue('--p'));
    
    if (currentProgress < 100) {
        currentProgress += 10;
        loadBar.style.setProperty('--p', `${currentProgress}`);
    } else {
        // If progress is 100, initiate fade-out
        fadeOutContainer();
    }

    setTimeout(increaseProgress, 1000); // Adjust the delay as needed
}

function fadeOutContainer() {
    const splashScreen = document.getElementById('splashscreen');

    const transitionEndHandler = () => {
        // Remove the event listener to avoid multiple calls
        splashScreen.removeEventListener("transitionend", transitionEndHandler);
    
        // Set the display property to "none" after the transition is complete
        splashScreen.style.display = "none";
    };
    splashScreen.addEventListener("transitionend", transitionEndHandler);
    
    splashScreen.style.transition = "opacity 1s ease-in-out";
    splashScreen.style.opacity = 0;
}

increaseProgress();