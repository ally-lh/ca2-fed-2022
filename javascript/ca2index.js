
//----javascript code for the carousel -----START//

let s1 = document.getElementById("s1")
//only the first slide moves, and since the first slide will move left, the rest of the slides will move as well
function left1(){s1.style.marginLeft = 0;} 
function left2(){s1.style.marginLeft = '-30%';}
function left3(){s1.style.marginLeft = '-60%';}

// addEventListener allows it so that on the event of a 'click' on 'btn_', function 'left_' will run
document.getElementById('btn1').addEventListener("click",left1)
document.getElementById('btn2').addEventListener("click",left2)
document.getElementById('btn3').addEventListener("click",left3)

//--------javascript code for the carousel END----- //


