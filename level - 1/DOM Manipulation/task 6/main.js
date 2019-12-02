//Make a function that adds and removes .active class from <div id="btn">Click Me!</div>

function btnClick(){

    //code here
    // 1.var
    // let short = document.getElementById("btn");
    // if(short.classList.contains("active")) {
    //     short.classList.remove("active");
    // } else {
    //     short.classList.add("active");
    // }

    //2.var (trumpesnis)

    let short = document.getElementById('btn');
    short.classList.toggle('active');

}
//answer is in answer.txt