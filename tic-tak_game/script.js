 let boxes = document.querySelectorAll('.box');


 let player0= true; //
 let resetBtn = document.querySelectorAll('reset-btn') 


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
        checkwinner()
    })
    
  })

  const checkwinner=()=>{
    for(let passvalue of wining_consdition){
        
        let passvalue1= boxes[passvalue[0]].innerText
        
        let passvalue2= boxes[passvalue[1]].innerText
         
        let passvalue3= boxes[passvalue[2]].innerText

         console.log("row element we take"+ " " + passvalue +" " + passvalue1)
        

        if(passvalue1 !="" && passvalue2!="" && passvalue3!=""){
            if(passvalue1==passvalue2 && passvalue2==passvalue3){
                console.log('winner is found'+passvalue1);
            }
        }

         
         
    }
   
     
  }

 