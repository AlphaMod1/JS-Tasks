//Generate and print obj *array* into <div id="output"></div> (note: print every variable inside a unique <p> tag and every array item in <div>)

const obj = [
    {
        name: 'vardenis',
        age: 45,
        info: 'Lorem ipsum dolor sit amet.'
    },
    {
        name: 'pavardenis',
        age: 256,
        info: 'Consectetur adipiscing elit.'
    },
    {
        name: 'vardpavardenis',
        age: 25,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
];

//code here
// let HTML = "";
// for(let i=0; i<obj.length; i++) {
//     HTML += `
//     <div>
//         <p>${obj[i].name}</p>
//         <p>${obj[i].age}</p>
//         <p>${obj[i].info}</p>
//     </div>`;
// }

// document.getElementById('output').innerHTML = HTML;

let HTML = '';
let short = document.getElementById('output');
for(let x=0; x<obj.length; x++) {
    HTML = `<div></div>`;
    HTML += `<p>${obj[x].name}</p>`;
    HTML += `<p>${obj[x].age}</p>`;
    HTML += `<p>${obj[x].info}</p>`;
    HTML += `</div>`;
    short.insertAdjacentHTML("beforeEnd", HTML);
}

//answer is in answer.txt