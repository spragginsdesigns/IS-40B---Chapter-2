function multiply()
{
        num1 = document.getElementById("Form1").value;
        num2 = document.getElementById("Form2").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divide() 
{ 
        num1 = document.getElementById("Form1").value;
        num2 = document.getElementById("Form2").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function add()
{
        num1 = document.getElementById("Form1").value;
        num2 = document.getElementById("Form2").value;
        document.getElementById("result").innerHTML = +num1 + +num2;
}

function subtract() 
{ 
        num1 = document.getElementById("Form1").value;
        num2 = document.getElementById("Form2").value;
document.getElementById("result").innerHTML = num1 - num2;
}