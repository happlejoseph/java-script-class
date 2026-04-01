// 1. check positive or negative number
// 2. check number is odd or even
// 3. find largest two numbers
// 4. check devisible by 5
// 5. Temperature Check use if statement (If temperature is greater than 30, print "Hot Weather".)

// if else if

// 1. Traffic Light System
// Red → Stop
// Yellow → Wait
// Green → Go

// 2. Age Category

// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60+ → Senior Citizen

// switch 

// 1.calculator
// Input operator (+ - * /) and perform calculation.

// 2. Grade Message
// Input grade letter and show message.
// A → Excellent
// B → Good
// C → Average
// D → Pass
// F → Fail
// zzq-hpmn-kgt

let temperature = 30;
if (temperature>30){
    console.log('hot weather');
    
} else{
    console.log('normal weather');
    
}

let a = 10;
let b = 20;
if (a>b){
    console.log('greater number is a');
    
} else{
    console.log('greater number is b');
    
}

let light = "green"
if (light=="red"){
    console.log('stop');
    
}else if(light=="yellow"){
    console.log('wait');
    
} else if(light=='green'){
    console.log('go');
    
}

let age = 100;
if(age<=12){
    console.log('child');
    
}else if(age<=19){
    console.log('teenager');
    
}else if(age<=59){
    console.log('adult');
    
}else{
    console.log('Senior Citizen');
    
}

let num1 = 6;
let num2 = 6;
let operator = '*';
let result;

switch(operator){
    case '+':
        result = num1+num2
        console.log('result', result);
        break;
        
    case '-':
        result = num1-num2
        console.log('result', result);
        break;

    case '*':
        result = num1*num2
        console.log('result', result);
        break;

    case '/':
        result = num1/num2
        console.log('result', result);
        break;

    default:
        console.log('invalied operator');
        
        
        
        
        
}