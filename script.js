const list = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const list2=[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"]

const list3 =["0","1","2","3","4","5","6","7","8","9"]

 const list4 =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

 const list5 =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

 


 
 

 






function generate(){
   alert("Your password must contain no less then 8 characters.")
   let choice = window.prompt("would you like for your password to contain only lowercase letter? yes/no")
   if(choice==="yes"){
      lowerCasePass();
   }else if(choice==="no"){
      generate2();
   }
}
generate()
function lowerCasePass(){
   let choice = window.prompt("How many charactors would you like your password to be?", );

   if(choice<8){
      alert("You password is to short")
      lowerCasePass();
   } else{

   let newNum = []
   for(let i = 0; i<choice;i++){
     var randomIndex2 = Math.floor( Math.random(list[i])*list.length );
  console.log(list[randomIndex2])
       newNum.push(list[randomIndex2])
  
}
 alert("your new password is " +newNum.join(''))
}
}
/////////////////////////////////////////////////////////////////////////////////////////
function generate2 (){
   let choice2 = window.prompt("would you like your password to contain only symbols? yes/no")
   if(choice2==="yes"){
        symbolPass(); 
   } else if(choice2==="no"){
      generate3();
   }
}
function symbolPass(){
   let choice = window.prompt("How many charactors would you like your password to be?", );
   if(choice<8){
      alert("You password is to short")
      symbolPass();
   } else{
   let newNum2 = []
   
   for(let i = 0; i<choice;i++){
     var randomIndex2 = Math.floor( Math.random(list2[i])*list2.length );
  console.log(list2[randomIndex2])
       newNum2.push(list2[randomIndex2])
   }
   alert("your new password is " +newNum2.join(''))
}
 
}

//////////////////////////////////////////////////////////////////////////////////
function generate3 (){
   let choice3 = window.prompt("would you like your password to contain only numbers? yes/no")
   if(choice3==="yes"){
        numberPass(); 
   } else if(choice3==="no"){
      generate4();
   }
}
function numberPass(){
   let choice = window.prompt("How many charactors would you like your password to be?", );
   if(choice<8){
      alert("You password is to short")
      numberPass();
   } else{
   let newNum3 = []
   
   for(let i = 0; i<choice;i++){
     var randomIndex2 = Math.floor( Math.random(list3[i])*list3.length );
  console.log(list3[randomIndex2])
       newNum3.push(list3[randomIndex2])
  
}
 alert("your new password is " +newNum3.join(''))
   }
}
//////////////////////////////////////////////////////////////////////////////////////


function generate4 (){
   let choice4 = window.prompt("would you like your password to contain only capital? yes/no")
   if(choice4==="yes"){
        capitalPass(); 
   } else if(choice4==="no"){
      generate5();
   }
}
function capitalPass(){
   let choice = window.prompt("How many charactors would you like your password to be?", );
   if(choice<8){
      alert("You password is to short")
      capitalPass();
   } else{
   let newNum4 = []
   
   for(let i = 0; i<choice;i++){
     var randomIndex2 = Math.floor( Math.random(list4[i])*list4.length );
  console.log(list4[randomIndex2])
       newNum4.push(list4[randomIndex2])
  
}
 alert("your new password is " +newNum4.join(''))
   }
}
////////////////////////////////////////////////////////////////////////////////////
function generate5 (){
   let choice4 = window.prompt("would you like your password to contain numbers, symbols, lowercase and uppercase letters? yes/no")
   if(choice4==="yes"){
        allPass(); 
   } else if(choice4==="no"){
      
   }
}
function allPass(){
   let choice = window.prompt("How many charactors would you like your password to be?", );
   if(choice<8){
      alert("You password is to short")
      allPass();
   } else{
   let newNum5 = []
   
   for(let i = 0; i<choice;i++){
     var randomIndex2 = Math.floor( Math.random(list5[i])*list5.length );
  console.log(list5[randomIndex2])
       newNum5.push(list5[randomIndex2])
  
}
 alert("your new password is " +newNum5.join(''))

}
}