
function showAnswer(e){

    let answer = e.target.parentNode.nextElementSibling;
    
    console.log(answer);
    
    if (answer.className === "disabled"){
        answer.className = "active";
        e.target.style.transform = 'rotate(180deg)';
        e.target.style.transition = 'all .5s'
    }
    else{
        answer.className = "disabled";
        e.target.style.transform = 'rotate(0deg)';
    }
}
