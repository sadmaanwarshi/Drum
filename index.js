var n = document.querySelectorAll(".drum").length;

for(var i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",onclick);
}

document.addEventListener("keypress",onkeyboard);

function onkeyboard(event){
    var presskey = event.key;
    makesound(presskey);
    animation(presskey);
}
function onclick(){
    var buttonpressed = this.innerHTML;
    makesound(buttonpressed);
    animation(buttonpressed);
}

function makesound(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
         case "k":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        default:
            alert("You pressed wrong key");
    }
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100)
}