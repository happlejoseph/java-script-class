document.getElementById('add-student').addEventListener('submit', (e)=>{
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let age = Number(form.age.value);
    let course = form.course.value;
    let rolno = Number(form .rollno.value);
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({name,age,rolno,course});
    localStorage.setItem('students',JSON.stringify(students));
    window.location.href='../index.html';
})