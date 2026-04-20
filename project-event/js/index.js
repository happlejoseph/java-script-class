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
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        `
    });
    document.getElementById('students').innerHTML = str;
}
displayStudents();