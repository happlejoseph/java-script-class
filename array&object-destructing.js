// ARRAY DESTRUCTURING

let n = [12, 13, 14, 15, 16];
// let n1 = n[0];
// let n2 = n[1]; this more lines 
// this is the easy way

let [n1,n2,...n3] = n;
console.log(n1);
console.log(n2);
console.log(n3);
// console.log(n4);




// OBJECT DESTRUCTURING

let employ = {
    name: 'chacko',
    age: 20,
    department: 'software',
    salary: 30000,
    skills: {
        backed: ['nodejs', 'javascript'],
        frontend: ['angular', 'react']
    }
}

// let {name} = employ
// console.log(name);

let {salary} = employ
console.log(salary);


// let {name, skills} = employ
// console.log(name);
// console.log(skills);

let {name, skills:{backed}} = employ
console.log(name);
console.log(backed);


