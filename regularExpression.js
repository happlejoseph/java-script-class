// . is any character
// ^ is starting of a string
// $ is ending of a string
// * is 0 or more occurances
// + is 1 or more occurance
// ? is 0 or 1 occurance
// \ is escape character
// [] is character set
// | is either value
// - range
// \d is digits [0-9]
// \w is word characters [a-z A-Z 0-9 _]
// \s is space


let regex1 = /javascript.$/;

let regex2 = /^cat/i; //i is for lowercase or uppercase 

let str1 = 'I like javascript!';
console.log(regex1.test(str1));


let str2 = 'CAT is an aimal';
console.log(regex2.test(str2));



console.log(/go*al/.test('goooooal'));
console.log(/go+al/.test('goal'));
console.log(/go?al/.test('gooal'));
// console.log(/5+5/.test('5+5'));
console.log(/5\+5/.test('5+5'));
console.log(/[cb]at/.test('i like cat')); // its check c or b os there before at (cat or bat)
console.log(/cat|bat/.test('i like cat'));
console.log(/cat|bat/.test('i like bat'));
console.log(/[0-9]/.test('1'));
console.log(/[0-9a-zA-Z]at/.test('cat'));

// checking a phone number
// 10 digits
// no other characters
// 6 to 9 in starting

console.log(/^[6-9]\d{9}$/.test('8111946194'));

//Email validation conditions

console.log(/^[a-z0-9_]+@[a-z0-9]+\.[a-z]{2,4}$/.test('happl55e@gmail.com'));

//Password validation
console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/.test('Happlejosep123'));

///^[a-zA-Z0-9]{8,}$/