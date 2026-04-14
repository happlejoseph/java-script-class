let num1 = [12, 13, 14, 16];
let num2 = [...num1];
num2[3] = 15;
console.log(num1);
console.log(num2);



let student1 = {
    name: 'chacko',
    age: 100
}

let student2 = {...student1}
student2.name = 'happle'

console.log(student1);
console.log(student2);


