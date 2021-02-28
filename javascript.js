let Feet = document.getElementById('feet');
let Inches = document.getElementById('inches');
let button = document.getElementById('btn');
let output = document.getElementById('result');

button.addEventListener('click',()=>{
    
    let feet2 = Feet.value*30.48;
    let feet1 = parseInt(feet2);


    let inch1 = Inches.value*2.54; 
    let inch2 = parseInt(inch1);


   let output1 = parseInt(feet2 + inch2);
   output.innerHTML = `Your Height is : ${output1} centimeter`;
   Feet.value="";
   Inches.value="";

   
 

 })
