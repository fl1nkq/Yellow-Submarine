let strelki = document.getElementsByClassName("strelki");
let cards = document.getElementsByClassName("customer-box");
let i = 0
console.log(strelki, cards);

for(let card of cards){
    card.style.opacity = "0";
    card.style.position = "absolute";
    card.style.zIndex = "-1";
    card.style.width = "0";

};

cards[0].style.opacity = "1";
cards[0].style.position = "relative";
cards[0].style.zIndex = "0";
cards[0].style.width = "80%";


strelki[0].addEventListener("click", function(){
    cards[i].style.opacity = "0";
    cards[i].style.zIndex = "-1";
    cards[i].style.position = "absolute";
    cards[i].style.width = "0%";

    i = (i - 1 + cards.length) % cards.length;

    cards[i].style.position = "relative";
    cards[i].style.opacity = "1";
    cards[i].style.zIndex = "0";
    cards[i].style.width = "80%";
})

strelki[1].addEventListener("click", function(){
    cards[i].style.opacity = "0";
    cards[i].style.zIndex = "-1";
    cards[i].style.position = "absolute";
    cards[i].style.width = "0%";

    i = (i + 1) % cards.length;

    cards[i].style.position = "relative";
    cards[i].style.opacity = "1";
    cards[i].style.zIndex = "0";
    cards[i].style.width = "80%";
})


window.onscroll = function(){
    let scrl_btn = document.getElementById("scrl_up_btn");
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        scrl_btn.style.opacity = "1";
        scrl_btn.style.zIndex = "10";
    }
    else{
        scrl_btn.style.opacity = "0";
        scrl_btn.style.zIndex = "-1";
    };
};

document.getElementById("scrl_up_btn").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});