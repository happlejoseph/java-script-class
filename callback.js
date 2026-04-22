// callback functions are functions that are passed as arguments to other functions and are executed after some operation has been compilited.

function sayHello (callback) {
    console.log('hello');
    callback();
    
}

function sayGoodbye () {
    console.log('good bye');
    
}
sayHello(sayGoodbye); // in this example, sayGoodbye is a callback function that is passed as an argument to the sayHello function. When the sayHello function is called, it first logs 'hello' to the console and then calls the callback function, which logs 'good bye' to the console.


function step1 (callback) {
    setTimeout(()=>{
        console.log('step 1 completed');
        callback();

    }, 1000);
}

function step2 (callback) {
    setTimeout(()=>{
        console.log('step 2 completed');
        callback(); 
        
    }, 1000);
}

function step3 (callback) {
    setTimeout(()=>{
        console.log('step 3 completed');
        callback();
        
    }, 1000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log('all steps are completed'); // this is an example of callback hell, where we have multiple nested callbacks that can be difficult to read and maintain.
            
        })
    })
})