let text = document.getElementsByClassName("customer-box");
let arrows = document.getElementsByClassName("strelki");

let pokaz = 0;

function text_style_off_0(){
    for(let i = 0; i < text.length; i++){
        text[i].style.opacity = "0";
        text[i].style.position = "absolute";
    }
}

function text_style_on_0(pokaz){
    text[pokaz].style.opacity = "1";
    text[pokaz].style.position = "relative";
}

text_style_off_0();
text_style_on_0(pokaz);

for(let i = 0; i < arrows.length; i++){
    arrows[i].addEventListener("click", function(){
        text_style_off_0();
        if(i == 0){
            pokaz = (pokaz - 1 + text.length) % text.length;
        }
        else{
            pokaz = (pokaz + 1) % text.length;
        }

        text_style_on_0(pokaz);
    })
};