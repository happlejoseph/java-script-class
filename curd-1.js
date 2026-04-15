
let names = []; //we need a place to store names.

function addName (){                        //Create a function to add a name.
    let name = prompt('Enter the name');    //Ask user for a name.
    names.push(name);                       //Store it in the array.
}

function getNames (){    //its is the function to get the names from the array and return them as a string to display. 
    let str = '';        //Create an empty string to store the names before displaying them..
    names.forEach((item, index)=> {         //Loop through the array and add each name to the string with its index.
        str += `${index + 1}. ${item}\n`;
    });
    return str;
}

function displayNames (){   //Create a function to display names.
    let str = getNames();
    alert(str);
}

function editName (){
    let str = getNames();
    let index = Number(prompt('Enter the number to edit:'));  //Ask which name to edit
    let newName = prompt('Enter the new name:'); //Ask for the new name.
    names[index - 1] = newName; //Update the name in the array.
}

function deleteName (){
    let str = getNames();
    let index = Number(prompt('Enter the number to delete:')); //Ask which name to delete.
    names.splice(index - 1, 1);  // splice(start, deleteCount) //Remove the name from the array.
}

while (true){

    let choice = prompt('Enter your choice:\n1. Add name\n2. Display names\n3. Edit name\n4. Delete name\n5. Exit');
    if (choice === '1'){
        addName();
    } else if (choice === '2'){
        displayNames();
    } else if (choice === '3'){
        editName();
    } else if (choice === '4'){
        deleteName();
    }
}