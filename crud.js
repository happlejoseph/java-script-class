let names = [];

function addName(){
    let name = prompt('Enter the name')
    names.push(name)
}

function getName(){
    let str = ''
    names.forEach(name,index => {
        str+= `${index+1} ${name}`
    });
    return str;
}

function displayName(){
    let str = getName()
    alert(str)
    
}

function editName(){
    let srt = getName()
    let index = Number(prompt(`${str}\nEnter the index of the name you wnat to edit`))
    let newName = prompt('Enter the new name',name[index-1]);
    names[index-1] = newName
}

function deleteName(){
    let str = getName();
    let index = Number(prompt(`${str}\nEnter the index of the name you wnat to delete`))
    names.splice(index-1,1)
}


while (true){
    let cohice = prompt('Enter your choice \n1. Add name \n2. Display name \n3. Edit name \n4. Delete name \n5. Exit')

    if (cohice == '1')
        addName();
    
    else if (cohice == '2')
        displayName();

    else if (cohice == '3')
        editName();

    else if (cohice == '4')
        deleteName();
    
    else if (cohice == '5')
        break;

}