//- Є змінна х, якій ви надаєте довільне числове значення.
 //   Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//   інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 54;

if (0 != x) {
    console.log('Well');
} else {
    console.log('BAD');
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let minNum = 80;
let maxNum = 70;

if(minNum>maxNum){
    console.log(`max number is ${minNum}`);
}
else if (maxNum>minNum){
    console.log(`max number is ${maxNum}`);
}

else {
    console.log('number is the same');


}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
//    буде присвоювати змінній х значення "default"
//    якщо ви намагаєтесь присвоїти в неї falsy-значення
//    (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1;

if (!x1){
    x1 = "default";
}

    console.log(x1);

x1 = "";
if (!x1){
    x1 = "default";
}
console.log(x1);

x=0;
if(!x1){
    x1= "default";
}

console.log(x1);

x= "hello";
if(!x1){
    x1="default";
}
console.log(x1);

x= 100;
if(!x1){
    x1 = "default";

}
console.log(x1);



//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5,},
    {title: 'Java Complex', monthDuration: 6,},
    {title: 'Python Complex', monthDuration: 6,},
    {title: 'QA Complex', monthDuration: 4,},
    {title: 'FullStack', monthDuration: 7,},
    {title: 'Frontend', monthDuration: 4,},
];


if (coursesAndDurationArray[0].monthDuration > 5){
console.log("Cool");}
else {
    console.log("BAD");
}

if(coursesAndDurationArray[1].monthDuration > 5){
    console.log("Cool");
}
else {
    console.log("BAD");
}

if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Cool");
}
else {
    console.log("BAD");
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Cool");
}
else {
    console.log("BAD");
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Cool");
}
else {
    console.log("BAD");
}

if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Cool");
}
else {
    console.log("BAD");
}