let bluebutton = document.querySelector("#blue_button");
let redbutton = document.querySelector("#red_button");
let yellowbutton = document.querySelector("#yellow_button");
let greenbutton = document.querySelector("#green_button");
let lightbluebutton = document.querySelector("#lightblue_button");
let blackbutton = document.querySelector("#black_button");
let greybutton = document.querySelector("#grey_button");
let contentText = document.querySelector(".contain_text");

bluebutton.addEventListener("click",bluefunction);
function bluefunction ()
{
    contentText.style.backgroundColor = "blue";
}
redbutton.addEventListener("click",redfunction);
function redfunction ()
{
    contentText.style.backgroundColor = "red";
}
let name = document.querySelector("#name");
yellowbutton.addEventListener("click",yellowfunction);
function yellowfunction ()
{
    contentText.style.backgroundColor = "yellow";
}
greenbutton.addEventListener("click",greenfunction);
function greenfunction ()
{
    contentText.style.backgroundColor = "green";
}
lightbluebutton.addEventListener("click",lightbluefunction);
function lightbluefunction ()
{
    contentText.style.backgroundColor = "lightblue";
}
blackbutton.addEventListener("click",blackfunction);
function blackfunction ()
{
    contentText.style.backgroundColor = "black";
}
greybutton.addEventListener("click",greyfunction);
function greyfunction ()
{
    contentText.style.backgroundColor = "grey";
}

name.textContent = prompt("Please enter your name");

// the paragraph refrence
let paragraph = document.getElementById("original_text");
//paragraph.textContent = "this is original text";




// this is for text area

let textarea = document.getElementById("text_area_text");
textarea.addEventListener("change",changeText);
function changeText () {
    //alert("this text is changed");
    let content = textarea.value;
    paragraph.textContent = content;
}



