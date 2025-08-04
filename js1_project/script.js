  /*const max = 57
  const actual  =  max-13
  const percentage = max/actual
  console.log(percentage)
  // there is any differcent in tit
  console.log( 16 + "Volvo")
/// big integer is used for get big integer value 
  let x= BigInt(123456789012345678901234567890)
  console.log(x)

  const str = "this is monu in frount of you ";
  const num = 45
  const nool = true

  console.log(typeof(str));
   console.log(typeof(num));
    console.log(typeof(nool));

    /// difference between == and ===
    // lose equality == and hard equality ===

    console.log('5'==5)
     console.log('5'===5)
    console.log(0==false)
     console.log(0===false)
     console.log(5===5)


    function clickhere() {
        alert('you click the click here bottom ')
    }
   

    let ans = [2,3,4,5,5,6,7,8];
            console.log(addingElement(ans))

    function addingElement(arr){
        let ans = 0;
        for(let i =0;i<arr.length;i++){
            ans = ans+arr[i]
        }
        console.log(ans+"this is the sum");

    }*/
   // how we take input in javascript


   /// java script prompt is used to take input 
   /*let num = prompt('please enthe the value of num ')

   if(num<18){
    console.log('you are not adulte')
   }
   else if(num>18 && num<60){
    console.log('you are addult you are eligible to work more ')
   }
   else{
    console.log("you are old ")
   }*/

    // now we are goint to learn switch case 

    /*switch(new Date().getDate()){
      case 0: day='sunday'; break;
      case 1: day='Monday' ;break;
      case 2: day='tuseday';break;
      case 3: day='wednesday';break;
      case 4: day='thrusday';break;
      case 5: day='friday';break;
      case 6: day='saturday';break;
    }
    console.log(day)
   */
  // now think about the function in 

  /*let num1 = prompt('please enter the first element ');
  let num2 = prompt("please enter the second no ")
 
   function find_answer(Number(num1),Number(num2)){
     
    let ans = num1+num2;
    console.log(ans);
     
   }

   find_answer(num1,num2)
   // here we get string answer */

 /*   let num = prompt("Enter the first number:");
let num1 = parseInt(num);

let s = prompt("Enter the second number:");
let num2 = parseInt(s);

let p = prompt("Enter the third number:");
let num3 = parseInt(p);

function find_max(num1, num2, num3) {
  console.log(`You entered numbers: ${num1}, ${num3}, ${num2}`);
  
  if (num1 > num2 && num1 > num3) {
    console.log("The maximum number is " + num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log("The maximum number is " + num2);
  } else {
    console.log("The maximum number is " + num3);
  }
}

find_max(num1, num2, num3);*/

// we have to use arrow function 
/*let num1 = prompt('enther the num')
let a =  parseInt(num1)
let num2 = prompt('enter the another num')
let b =  parseInt(num2)

const ans = (a,b)=>{
  return  a+b
}

console.log(ans(a,b))*/

// first we have take a input no 
// start loop from i ot this number
// if number is divisible by 3 return fizz if number is divisble by five retturn buizz fi the nymber is divisible by both retturn fizzbuzz


 /*let num = prompt('enter the number ');
 console.log(num)
 let n = parseInt(num);
 
 for(let i=1;i<=n;i++){
   
 
   
 
 if(i%3==0 && i%5==0){
  console.log('fizzbuzz')
 }
 else if(i%3==0){
  console.log('fizz')
 }
 else if(isSecureContext%5==0){
      console.log('buzz')
 }
 else {
  console.log('this number is not divisible by 3 and 5')
 }
 }*/


 // now we learn about map filter and for each loop 

 /*let arr = [1,2,3,4];
 let sum =0;
 for(let i=0;i<arr.length;i++){
    sum = sum+arr[i];

 }
 console.log('so the answer form for each array is '+sum);

 // now learninng about map basical it is a callback function
 // map make a new array where for each is a loop which is used to perform operation
 // in map we can pass (value,index,array) this is the same order

 let a = arr.map((i)=>{
       console.log(i)
       i=i+1
 })

 console.log(a)


 // now we lear about filter methoud it is also make a new array but here we can apply condition
 // these function is not modifie over array

 let arr2 = [23,1,4,6,78,82]

 let ans = filter((v)=>{
        return v>10
 })

 console.log(ans)


 // abothe functionn is reduce it all all most same  // in this we learn that when we pass on map (v1,v2) it take index value and value but in it it only take value not onter
 let arr3 =[2,3,4,5,6]
 let ans = reduce((v1,v2)=>{
         return v1+v2
 })


 /// Creates a new array by transforming each item for map
 //  reduce() → Combines all elements into a single value
 // filter() → Creates a new array of elements that match a condition*/

 // now we can slove the problem

 let arr =  [7,6,4,3,1]// becouse dono ake hi point per rook janga 
 let  point1 = 0;
 let point2 = arr.length-1
 let max =-Infinity;
 let min =Infinity;
 while(point1<=point2){
        max = Math.max(max,arr[point2]);
        min = Math.min(min,arr[point1]);
        point1++;
        point2--;
 }
 let ans = max-min;
  

if(ans<0){
  console.log(ans)
}
else{
  console.log(ans)
}
