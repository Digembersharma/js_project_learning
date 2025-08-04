// now we have to perform a logic 
let num = document.getElementById('container').addEventListener("click",change_color)

function change_color(){
   let randomNum = Math.floor(Math.random()*16777215);
   let randomColor = "#" + randomNum.toString(16).padStart(6, '0');
  
    document.body.style.backgroundColor=randomColor

    document.getElementById('box').innerHTML=randomColor

}
 
change_color()