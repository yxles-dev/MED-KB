var x = document.getElementById("logindiv");
x.style.display = "none";
var y = document.getElementById("registerdiv");
y.style.display = "none";

function logindiv() {
    console.log("Hello World");
    var x = document.getElementById("logindiv");
    if (x.style.display === "none") {
        console.log("block");
        x.style.display = "block";
    } else {
        console.log("none");
        x.style.display = "none";
    }
}

function registerdiv() {
    console.log("Hello World");
    var y = document.getElementById("registerdiv");
    if (y.style.display === "none") {
        console.log("block");
        y.style.display = "block";
    } else {
        console.log("none");
        y.style.display = "none";
    }
}