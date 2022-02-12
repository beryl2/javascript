var temperature = 16;
var raining = true;
if (temperature < 0){
    console.log("don't freeze out there!");
}else if (temperature < 15 && raining ===true){
    console.log("don't forget a jacket!");
}else if (temperature < 25){
    console.log("have a nice day:");
}else{
    console.log("keep cool today");
}

var temperature = 16;
var raining = true;
if (temperature < 0){
    console.log("don't freeze out there!");
}else if (temperature < 15 || raining ){
    console.log("don't forget a jacket!");
}else if (temperature < 25){
    console.log("have a nice day:");
}else{
    console.log("keep cool today");
}
