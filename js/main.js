
function showAnswer(e){

    let button = e.target;
    console.log(button);

    let answer = button.parentNode.nextElementSibling;
    let paragraph = button.previousElementSibling;

    switch (answer.className) {
        case "disabled":
            let activeElements = document.querySelectorAll('.active');

            if(activeElements.length>0){
                activeElements.forEach(element => {
                    disableElements();
                });
            }

            Active(answer,paragraph,button);
            break;
    
        default:
            Disabled(answer,paragraph,button);
            break;
    }

}

function Active(answer,paragraph,button){
        answer.className = "active";
        button.style.transform = 'rotate(180deg)';
        button.style.transition = 'all .5s';
        paragraph.style.fontWeight = "700";
}

function Disabled(answer,paragraph,button){
    answer.className = "disabled";
    button.style.transform = 'rotate(0deg)';
    paragraph.style.fontWeight = "400";
}

function disableElements(){
    let buttons = document.querySelectorAll("button");

    buttons.forEach(element => {
        let answer = element.parentNode.nextElementSibling;
        let paragraph = element.previousElementSibling;

        if(answer.className === "active"){
            Disabled(answer,paragraph,element)
        }
    });
}