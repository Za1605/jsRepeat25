//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
   document.write(`<div>Hello</div>`);
}
for (let i = 1; i <= 11; i++) {
    document.write(`<div> How are you ${i}</div>`);

}

let div20 = 1;

while (div20 <= 20){
    document.write(`<div>
        <h1> How was you day?</h1>
    </div>`);
    div20++;
}

let div21 = 1;
while (div21 <=21){
    document.write(`<div>
<h3>Lellll${div21}</h3>
</div>`);
    div21++;
}
