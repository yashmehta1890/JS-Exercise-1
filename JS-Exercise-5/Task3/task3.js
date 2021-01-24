alert("Greetings Mr. X please choose the surprise box");

//In box3 print text
function addText() {
  const box3 = document.getElementById("content").innerHTML="Oops something wrong?";
}

//Change Box2 colors in every 3 sec.
let i = 0;
function changeColor() {
    const box2 = document.getElementById("second");
    const color = ["magenta", "mustard", "cyan "];
    box2.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(changeColor, 3000);
    

//Change Box4 colors in every 5 sec.

let j = 0;
function changesColors() {
    const colors = ["red", "green", "yellow", "orange", "gray"];
    const box4 = document.getElementById("fourth");
    box4.style.backgroundColor = colors[j];
    j = (j + 1) % colors.length;
}
setInterval(changesColors, 5000);

//On Arrow Buttons Change Colors
const array = ["red", "green", "yellow", "orange", "blue"];
const counterup = 0;
const counterdown = 0;
document.onkeydown = function(e) { 
        
    if(e.keyCode===37 || e.keyCode===38 || e.keyCode===39 || e.keyCode===40 ){
        
        let forward = (counterup + 1) % array.length;
        let backward = (counterdown - 1)% array.length;
        let nextColor = array[forward];
        let previousColor = array[backward];

        switch (e.keyCode) { 
            case 37: 
                //Left Key
                document.getElementById("fourth").style.background = previousColor;
                counterdown--;
                counterup=counterdown-1;
                break; 
            case 38: 
                //Up Key
                document.getElementById("fourth").style.background = nextColor;
                counterup++;
                counterdown=counterup+1;
                break; 
            case 39: 
                //Right Key 
                document.getElementById("fourth").style.background = nextColor;
                counterup++;
                counterdown=counterup+1;
                break; 
            case 40: 
                //Down Key
                document.getElementById("fourth").style.background = previousColor;
                counterdown--;
                counterup=counterdown-1;
                break; 
            default:
                break;
        } 
    }
 }