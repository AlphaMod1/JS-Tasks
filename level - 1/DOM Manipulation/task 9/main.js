//After a button press try getting #input value and printing it in to <div id="output">Output:</div>


function btnClick(){
    //code here
var gerulis = document.getElementById('input').value;
document.getElementById('output').innerHTML=gerulis;

    
}


// 2.var
// function btnClick(){
//     let input = document.getElementById('input');
//     let output = document.getElementById('output');
    
//     let inputText = 'Output: ';
//     inputText += input.value;
//     output.innerHTML = inputText;

// }
//answer is in answer.txt