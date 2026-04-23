// states of promise
// Pending     --> promise created
// Fullfilled  --> async operation completed successfully
// Rejected    --> async operation failed

let p1 = new Promise((resolve,reject)=>{ // resolve and reject are functions that use to change the state of promise. 

    let status = true;

    if (status) {
        resolve(['amal', 'joy', 'michale'])

    } else {
        reject('failed to fetch users')
    }
});

p1 

    .then((data)=>{ // then method is used to handle the resolved value of the promise. it takes a callback function as an argument that is executed when the promise is resolved successfully.
    console.log(data);
    
})

    .catch((error)=>{
        console.log(error); // catch method is used to handle the rejected value of the promise. it takes a callback function as an argument that is executed when the promise is rejected.
        
    })


function fetchUsers (){
    return new Promise((resolve, reject) => {
        if(false){
            resolve(['amal', 'joy', 'michale'])
        }
        else{
            reject('failed to fetch users');
        }
    })
} 
fetchUsers()
.then(console.log)
.catch(console.log);


function login (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('login successfull');
            resolve('success')
        },1000)
    })
}

function getUser (msg){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('user fetched...');
            resolve({username:'amal'})
        },1000)
        
    })
}

function getOrder (user){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(['order1', 'order2'])
        },1000)
    })
}


login()

    .then((msg)=>getUser(msg))
    .then(user=>getOrder(user))
    .then(orders=>console.log(orders))
    .catch(err=>console.log(err))



    // await
    async function completeOrder(params) {

        try {
            let msg = await login();
            let user = await getUser(msg);
            let orders = await getOrder(user)
            console.log('order received successfully:', orders);
            

        } catch(err) {
            console.log(err);
            
        }
    }
    
    let p2 = Promise.resolve('data 1')
    let p3 = Promise.resolve('data 2')
    let p4 = Promise.resolve('data 3')
    let p5 = Promise.resolve('data 4')

    Promise.all([p2,p3,p4,p5])
    .then(console.log)
    .catch(console.error);