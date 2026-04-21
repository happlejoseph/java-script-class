function displayStudents (){
    let students = JSON.parse(localStorage.getItem('students')) || []
    let str = '';
    students.forEach(student=>{
        str +=`
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.rolno}</td>
            <td>
                <button><a href="./page/edit.html?index=${index}">Edit Student</a></button> 
                <button onclick = "deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `
    });
    document.getElementById('students').innerHTML = str;
}
displayStudents();

function deleteStudent (index){ // this function is used to delete a student from the local storage, and then update the displayed list of students.
    let students = JSON.parse(localStorage.getItem('students')) || []; // get the students data from the local storage, if there is no data, then return an empty array.

    if(confirm(`Are you sure to remove? ${students[ind].name}`)){
        students.splice(ind, 1)[0]; // remove the student from the array using the index passed in the URL.
        localStorage.setItem('students', JSON.stringify(students));
        alert(`${students[ind].name} is deleted!`);

        displayStudents();
    } else {
        alert('Canselled!');
    }
}

document.getElementById('search').addEventListener('change', (e)=>{ // add an event listener to the search input, so that when the value of the input changes, we can filter the students data and display the filtered list of students.
    let value = e.target.value;
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let filteredStudents = students.filter(student=> student.name.toLowerCase().includes(value.toLowerCase())); // filter the students data based on the search input value, and return a new array of students that match the search criteria.

    displayStudents(filteredStudents); // call the displayStudents function with the filtered students data, so that we can display the filtered list of students.
})

function filterStudents (){ 
    let course = document.getElementById('course').value;
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let filteredStudents = students.filter(student=> course === "" || student.course === course); // filter the students data based on the selected course, and return a new array of students that match the selected course. If the selected course is empty, then return all students.

    displayStudents(filteredStudents); // call the displayStudents function with the filtered students data, so that we can display the filtered list of students.


}