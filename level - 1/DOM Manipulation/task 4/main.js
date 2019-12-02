//Generate and print obj into <div id="output"></div> (note: print every variable inside a unique <p> tag)

const obj = {
    name:'vardenis',
    age: 45,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
};

//code here

document.getElementById("output").innerHTML = `
    <p>${obj.name}</p>
    <p>${obj.age}</p>
    <p>${obj.info}</p>`;

// 2 variantas
    // let HTML = '';
    // HTML += '<p>'+obj.name+'</p>';
    // HTML += '<p>'+obj.age+'</p>';
    // HTML += '<p>'+obj.info+'</p>';
    // document.getElementById('output').innerHTML = HTML;
//answer is in answer.txt