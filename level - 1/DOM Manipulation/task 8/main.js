//Chenge style(any style) of the .box with js using style function
//... But this time do it to every other .box

//code here

let long = document.querySelectorAll('.box');

for(i=0; i<long.length; i++) {
    if(i%2 == 0){
        long[i].style.backgroundColor='violet';
    } 
};

//answer is in answer.txt