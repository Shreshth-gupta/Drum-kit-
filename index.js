var x = document.querySelectorAll(".drum").length;
for (var i = 0; i < x; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var btninnerhtml = this.innerHTML;
        makesound(btninnerhtml);
        addanimation(btninnerhtml);
    });
}
document.addEventListener("keydown", function (event) {
    makesound(event.key);
    addanimation(event.key);
});

function makesound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                case 's':
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                    case 'd':
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
                        case 'j':
                            var snare = new Audio("sounds/snare.mp3");
                            snare.play();
                            break;
                            case 'k':
                                var kick = new Audio("sounds/kick-bass.mp3");
                                kick.play();
                                break;
                                case 'l':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            default:
                break;
                
            }
        }
        function addanimation(keypr){
            var element = document.querySelector("." + keypr);
            element.classList.add("pressed");
            setTimeout(() => {
                element.classList.remove("pressed");
            }, 100);
        }