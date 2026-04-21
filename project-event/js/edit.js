let url = new URLSearchParams(window.location.search); // get the query parameters from the URL, which contains the index of the student to be edited.
let ind = url.get('index'); // get the index value from the query parameters, which will be used to identify the student in the local storage for editing.

function getStudents (){ // this function is used to get the students data from the local storage and display it in the form for editing.
    let students = JSON.parse(localStorage.getItem('students')) || []; // get the students data from the local storage, if there is no data, then return an empty array.
    let student = students[ind]; // get the student data from the array using the index passed in the URL.
    console.log(student);
    
    let form = document.getElementById('edit-student'); // get the form element from the DOM.
    form.name.value = student.name; // set the value, so that the form will be pre-filled with the existing data of the student.
    form.age.value = student.age;
    form.course.value = student.course;
    from.rollno.value = student.rollno;
    

}
getStudents(); // call the function to display the student data in the edit form.

document.getElementById('edit-student').addEventListener('submit', (e)=>{ // add an event listener to the form, so that when the form is submitted, we can update the student data in the local storage.
    e.preventDefault(); // prevent the default form submission behavior, which is to reload the page.
    let form = e.target;
    let name = form.name.value; // get the updated values from the form.
    let age = Number(form.age.value);
    let course = form.course.value;
    let rollno = Number(form.rollno.value);
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students[ind] = {name,age,course,rollno}; // update the student data in the array using the index passed in the URL.
    localStorage.setItem('students',JSON.stringify(students)); // save the updated students data back to the local storage.
    
    window.location.href = '../index.html'; // redirect the user back to the index page after updating the student data.

    });