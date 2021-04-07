function Add() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = a + b;
    document.getElementById("result").innerHTML = "Result Addition:" + c;
}
function Sub(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var c=a-b;
    document.getElementById("result").innerHTML = "Result Subtraction:" +c;
}
function Mul(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var c=a*b;
    document.getElementById("result").innerHTML = "Result Multiplication:" +c;
}
function Div() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = a / b;
    document.getElementById("result").innerHTML = "Result Division:" + c;
}