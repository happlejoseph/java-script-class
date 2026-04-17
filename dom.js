
let students = [
    {name: 'Albin',rollno: 1, class: 'xth', marks:{math:70, english:80, physic:85}},
    {name: 'Diya',rollno: 2, class: 'xth', marks:{math:80, english:86, physic:81}},
    {name: 'Rohn',rollno: 3, class: 'xth', marks:{math:78, english:70, physic:75}},
    {name: 'Jeff',rollno: 4, class: 'xth', marks:{math:75, english:90, physic:88}},
    {name: 'Fenu',rollno: 5, class: 'xth', marks:{math:60, english:78, physic:78}},
]

let str = '';
students.forEach(student=>{
    str+= `
    <tr>
            <td>${student.name}</td>
            <td>${student.rollno}</td>
            <td>${student.class}</td>
            <td>${student.marks.math}</td>
            <td>${student.marks.english}</td>
            <td>${student.marks.physic}</td>
            <td>Passed</td>
        </tr>

    `
});
document.getElementById('students').innerHTML = str;