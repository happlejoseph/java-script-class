//1.
let string = 'hello';
let reverseString = '';

for (let i = string.length - 1; i >= 0; i--){
    reverseString += string[i]; 
}
console.log(reverseString);




//2.
let num = 2;
if (num % 2 === 0){
    console.log('even');
    
} else (console.log('odd'));




//3.
let num1 = 1;
let num2 = 5;
let num3 = 3;
 
let largestNum;

if (num1 > num2 && num1 > num3){
    console.log(largestNum = num1);
    
} else if (num2 > num1 && num2 > num3){
    console.log(largestNum = num2);
    
}else (console.log(largestNum = num3));




//4.
let name = 'happle joseph';
let vowels = 'aeiou';
let count = 0;

for (let i = 0; i < name.length; i++){
    if (vowels.includes(name[i])){
        count++;
    }
}
console.log(count);




//5.
let name1 = 'mom';
let reversedName1 = '';

for (let i = name1.length -1; i >= 0; i--){
    reversedName1 += name1[i]; //reversedName1 = reversedName1 + name1[i];
}

if (name1 === reversedName1){
    console.log('palindrome');
    
} else (console.log('not palindrome'));



//6.
a = 1;
b = 2;
[a, b] = [b, a];

console.log([a, b]);



//7.
let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((total, num) => { //(accumulator, currentValue)
    return  total + num;
}, 0);

console.log(total);



//8.
let number = -3;

if (number > 0){
    console.log('positive');
    
} else if (number < 0){
    console.log('negative');
    
}else (console.log('zero'));



//9.
for (let i = 1; i <= 100; i++){
    
    console.log(i);
    
}



//10.
let str = 'helo world';
let strLength = str.length;

console.log(strLength);



//12.
let arr = [1, 2, 3, 3, 4, 5];
let unique = [...new Set(arr)];

console.log(unique);
