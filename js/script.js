function add(number1, number2) {
  return number1 + number2;
}


function subtract(number1,number2)
{
  return(number1,number2);
}

function divide(number,divisor)
{
  return(number/divisor);
}

function multiply(number1,number2)
{
  return(number1*number2);
}

function square(number)
{
  return  multiply(number,number);
}

function percentage(number)
{
  return divide(number/100);
}
$(document).ready(function(){
$("#add").submit(function(event){
event.preventDefault();
let firstNumber=$("#add1").val();
let secondNumber=$("#add2").val();

let result=add(parseInt(firstNumber),parseInt(secondNumber));
alert=(result);

$(document).ready(function(){
  $("#add").submit(function(event){
  event.preventDefault();
  let firstNumber=$("#add1").val();
  let secondNumber=$("#add2").val();
  
  let result=Subtract(parseInt(firstNumber),parseInt(secondNumber));
  alert=(result);
  
  });
  });
  $(document).ready(function(){
    $("#add").submit(function(event){
    event.preventDefault();
    let firstNumber=$("#add1").val();
    let secondNumber=$("#add2").val();
    
    let result=Multiply(parseInt(firstNumber),parseInt(secondNumber));
    alert=(result);
    
    });
    });
    $(document).ready(function(){
      $("#add").submit(function(event){
      event.preventDefault();
      let firstNumber=$("#add1").val();
      let secondNumber=$("#add2").val();
      
      let result=Divide(parseInt(firstNumber),parseInt(secondNumber));
      alert=(result);
      
      });
    });
