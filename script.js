let arr = [1, 2, 3, 4, 5, 6];

let lengthOfArry = arr.reduce((acc)=> acc + 1, 0);
console.log(lengthOfArry);


function lengthOf (str){
    let len = str.split('').reduce((acc)=> acc + 1, 0)
    return len
}
console.log(lengthOf('happle'));
