// document.getElementById('name').addEventListener('focus', (e)=>{ // focus event is triggered when we click on the input field.
//     console.log(e);
    
// });

// document.getElementById('name').addEventListener('change', (e)=>{ // change event is triggered when we change the value and leave the input field.
//     console.log(e);
    
// });

document.getElementById('name').addEventListener('input', (e)=>{
    // console.log(e); // input event is triggered when we change the value of the input field.

    // console.log(e.target); // target is the element on which the event is triggered.

    // console.log(e.target.value); // value is the value of the input field.

    // console.log(e.target.name); // name is the name attribute of the input field.
    
    
});

// document.addEventListener('mousemove', (e)=>{
//     console.log(e.clientX); // mousemove event is triggered when we move the mouse.
//     console.log(e.clientY); // clientX and clientY are the coordinates of the mouse pointer relative to the viewport.
    
    
// })

document.getElementById('add-student').addEventListener('submit', (e)=>{
    e.preventDefault(); // preventDefault is used to prevent the default action of the form which is to submit the form and refresh the page.

    let form = e.target;
    // console.log(form.name.value);
    let name = form.name.value;
    let classs = form.classs.value;
    let rollno = form.rollno.value;
    let maths = form.maths.value;
    let english = form.english.value;
    let physics = form.physics.value;
    
    
});