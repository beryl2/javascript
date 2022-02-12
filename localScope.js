var globalString = "this is a global variable";
function sampleFunction() {
    alert(globalString)
    globalString = "this is a global variable update ! !";
    alert(globalString);
}

alert(globalString);
sampleFunction();
alert(globalString);