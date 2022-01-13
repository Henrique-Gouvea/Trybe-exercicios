const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function bloquearLink(){
    event.preventDefault();
}

HREF_LINK.addEventListener('click', bloquearLink);

function bloquearCheckbox(){
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', bloquearCheckbox);

function apenasA(){
    if(event.key != 'a'){
        event.preventDefault();
    }
}

INPUT_TEXT.addEventListener('keypress', apenasA);