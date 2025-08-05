 let boxes = document.querySelectorAll('.box');


 let player0= true; // 


 const wining_consdition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [2,4,6],
    [6,4,8]
 ]
 console.log(wining_consdition)

  boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(player0){
            box.innerText="O"
            player0=false;
            console.log(player0)
        }
        else{
            box.innerText="X"
            player0=true;
        }
        // but there is a problem when we click it twice it will chang so we have to disable the bos to this we use
        box.disabled=true
        // harr box ka liy allag alag chalage disabled
    })
    
  });

 