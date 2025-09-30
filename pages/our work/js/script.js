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