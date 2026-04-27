// let arr = [12,23,323,24,3];

let students = {
    name : 'amal',
    age : 20,

    getDetails : function() {
        console.log(this.name)

        let a = ()=> {
            console.log(this, 'this is inside arrow function of anonymous function');
            
        }
        a();
    },

    getAge : ()=>{
        console.log(this, 'this is inside arrow function');
        
    }
}
students.getDetails();

students.getAge();


// function sample() {
//     console.log(this);
    
// }
// sample();

function greet(city) {
    console.log(`welcome, ${this.name} to ${city}`);
    
}
greet('kottayam');

let s1 = {
    name : 'jone'
}

let s2 = {
    name : 'jerin'
}

let s3 = {
    name : 'jacob'
}

greet.call(s1,'Mumbai')
greet.call(s2, 'kochi')
greet.call(s3, 'delhi')

greet.apply(s1,['bangalore'])

let s4 = greet.bind(s3)
s4('chennai')