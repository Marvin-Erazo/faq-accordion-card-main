
//This function catch the button element when this is clicked
function showAnswer(e){

    //the button clicked
    let button = e.target;
    //the paragrap of the faq answer this changes the class when the button is clicked
    let answer = button.parentNode.nextElementSibling;
    //the faq title, this change the color when the faq answer is showed
    let paragraph = button.previousElementSibling;

    //catch the class of the faq answer ot the button clicked
    switch (answer.className) {
        //if this disabled the class change to active
        //only show one FAQ per click
        case "disabled":
            let activeElements = document.querySelectorAll('.active');

            //before close the other actives FAQs if there are any FAQ active
            if(activeElements.length>0){
                activeElements.forEach(element => {
                    disableElements();
                });
            }

            //then change the class
            Active(answer,paragraph,button);
            break;
    
        default:
            //if the FAQ answer is active the class change to disabled when click the button
            Disabled(answer,paragraph,button);
            break;
    }

}

//change the claas from disable to active
//add a animation
function Active(answer,paragraph,button){
        answer.className = "active";
        button.style.transform = 'rotate(180deg)';
        button.style.transition = 'all .5s';
        paragraph.style.fontWeight = "700";
}

//change the class from active to disable
function Disabled(answer,paragraph,button){
    answer.className = "disabled";
    button.style.transform = 'rotate(0deg)';
    paragraph.style.fontWeight = "400";
}

//change the class of the active FAQ answers
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


//show/hide the attribution when the button is clicked
function showAttribution(){
    let authorState = document.querySelector('#author');
    authorState.className = authorState.className === "author" ? "author-active" : "author"; 
}