//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
const str = 'hello world';
console.log(str.length);


//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
const str1 = 'hello world';
console.log(str1.toUpperCase());

const str2 = 'lorem ipsum';
console.log(str2.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const str3 = 'hello world';
console.log(str3.toLowerCase());

const str4 = 'lorem ipsum';
console.log(str4.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

const str5 = ' dirty string   ';
console.log(str5.trim());
//
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str6 = 'Ревуть воли як ясла повні';
let arr7 = str6.split(' , ');
console.log(arr7);
//
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . з
// а допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
 let arr2 = arr1.map(String);
 console.log(arr2);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
 let arr3 = [11,21,3];
 let arr4 = arr3.sort((a,b) => b-a);
 console.log(arr4);
//==========================
//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

let arr5 = coursesAndDurationArray.sort((a,b) => a.monthDuration-b.monthDuration);
console.log(arr5)
let arr6 = arr5.filter(a => a.monthDuration > 5);
console.log(arr6);

 let arr8 = coursesAndDurationArray.map((coursesAndDurationArray,index) => ({
  title: coursesAndDurationArray.title,monthDuration: coursesAndDurationArray.monthDuration,id:index+1,
 }));
 document.write(JSON.stringify(arr8));
//    описати колоду карт (від 6 до туза без джокерів)
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше
//
//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}
//
//=========================
//
//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//        diamonds:[],
//    hearts:[],
//    clubs:[]
//}
//=========================
//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
 {
  title: 'JavaScript Complex',
  monthDuration: 5,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
 },
 {
  title: 'Java Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'git',
   'java core',
   'java advanced']
 },
 {
  title: 'Python Complex',
  monthDuration: 6,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'angular',
   'aws',
   'docker',
   'python core',
   'python advanced']
 },
 {
  title: 'QA Complex',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
 },
 {
  title: 'FullStack',
  monthDuration: 7,
  hourDuration: 909,
  modules: ['html',
   'css',
   'js',
   'mysql',
   'mongodb',
   'react',
   'angular',
   'aws',
   'docker',
   'git',
   'node.js',
   'python',
   'java']
 },
 {
  title: 'Frontend',
  monthDuration: 4,
  hourDuration: 909,
  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
 }
];