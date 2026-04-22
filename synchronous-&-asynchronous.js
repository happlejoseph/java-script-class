// set timeout

// console.log('before time out');

// setTimeout(()=>{
//     console.log('set time out');
    
// }, 5000);

// console.log('after time out');

// count = 10;

// let interval = setInterval(()=>{
//     console.log(count);

//     if (count === 0) {
//         clearInterval(interval);
//     }
//     count--;
    
// });

let box = document.getElementById('box');
let count = 10;
box.style.width = '100px';
box.style.height = '100px';
box.style.fontSize = '50px';
box.style.fontWeight = 'bold'
box.style.color = 'red';
box.style.backgroundColor = 'black';
box.style.textAlign = 'center';


let interval = setInterval(()=>{
    box.innerText = count;

    if (count === 0) {
        clearInterval(interval);
    }
    count--;
}, 1000);



