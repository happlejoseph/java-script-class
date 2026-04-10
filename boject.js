
// literal method
student = {
    name:'happle',
    rollNo:12,
    course: 'MERN',
    
    getDetails:function (){
        // console.log(this);
        console.log(this.name ,'hello');
        
        
    }
}
// student.name = 'joseph'
// console.log(student);
// student.getDetails() // need to use . to call



// constructor function
// function Employee(name, age, dept){
//     this.name = name;
//     this.age = age;
//     this.dept = dept

// }
// let emp1 = new Employee('jone', 21, 'software');
// console.log(emp1);

// let emp2 = new Employee('don', 20, 'mechanic');
// console.log(emp2);




// //class
// class Department{
//     constructor(deptName,role){
//         this.departmentName = deptName;
//         this.departmentRole = role
//     }

// }
// let dept1 = new Department('software', 'developer')
// console.log(dept1);


let key = 'rollNo'
console.log(student[key]);

for (let x in student){
    console.log(x, ':', student[x]);
    
}

for (let x in [1,2,3]){
    console.log(x);
    
}

//boject.keys(), object.values(), object.entries()
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));


