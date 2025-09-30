let brg_menu = document.getElementById("brg_menu");
let brg_menu_windows = document.getElementById("lolkek");
let gray = document.getElementById("earlgray");

brg_menu.addEventListener("click", function(){
    brg_menu_windows.style.right = "0px";
    gray.style.opacity = "1";
    gray.style.zIndex = "1000";
});

gray.addEventListener("click", function(){
    gray.style.opacity = "0";
    brg_menu_windows.style.right = "-500px";
    gray.style.zIndex = "-1000";
})

// asdsadsadsadsada

let btn_stroke1 = document.getElementById("btn_stroke1");
let btn_stroke2 = document.getElementById("btn_stroke2");

baton1.addEventListener("mouseenter", function(){
    btn_stroke1.style.stroke = "#000000";
    btn_stroke2.style.stroke = "#ffffff";

    baton1.style.backgroundColor = "#ffffff";
    baton2.style.backgroundColor = "#337F9E";
})

baton1.addEventListener("mouseleave", function(){
    btn_stroke1.style.stroke = "#ffffff";
    btn_stroke2.style.stroke = "#ffffff";

    baton1.style.backgroundColor = "#337F9E";
    baton2.style.backgroundColor = "#337F9E";
})

baton2.addEventListener("mouseenter", function(){
    btn_stroke1.style.stroke = "#ffffff";
    btn_stroke2.style.stroke = "#000000";

    baton1.style.backgroundColor = "#337F9E";
    baton2.style.backgroundColor = "#ffffff";
})

baton2.addEventListener("mouseleave", function(){
    btn_stroke1.style.stroke = "#ffffff";
    btn_stroke2.style.stroke = "#ffffff";

    baton1.style.backgroundColor = "#337F9E";
    baton2.style.backgroundColor = "#337F9E";
})

// dsadadsasdadsadsadsasda

let main_home1 = document.getElementById("main_home1");
let main_home2 = document.getElementById("main_home2");
let slide_num = 0;

function slide_1(slide_num){
    if(slide_num == 1){
        main_home1.style.opacity = "0";
        main_home1.style.position = "absolute";
        main_home1.style.left = "-50rem";

        main_home2.style.opacity = "1";
        main_home2.style.position = "relative";
        main_home2.style.left = "0";
    }
    else if(slide_num == 2){
        main_home1.style.opacity = "1";
        main_home1.style.position = "relative";
        main_home1.style.left = "0";

        main_home2.style.opacity = "0";
        main_home2.style.position = "absolute";
        main_home2.style.left = "-50rem";
    }
}

baton1.addEventListener("click", function(){
    slide_num = slide_num == 1 ? 2 : 1;
    slide_1(slide_num);
})

baton2.addEventListener("click", function(){
    slide_num = slide_num == 1 ? 2 : 1;
    slide_1(slide_num);
})
// dsadsadsadsada

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

// dsadsadsadsa

function sub(){
    let em = document.getElementById("fname");
    let true_r = document.getElementById("true_r");
    let false_r = document.getElementById("false_r");
    let em_v = em.value.trim();

    if(em_v.includes("@")){
        true_r.style.opacity = "1";
        true_r.style.zIndex = "10";
        em.value = "";
    }
    else{
        false_r.style.opacity = "1";
        false_r.style.zIndex = "10";
    }
}

function btn_block(e){
    if(e.key == "Enter"){
        e.preventDefault();
        return false;
    }
}

function close_wind(){
        false_r.style.opacity = "0";
        false_r.style.zIndex = "-1";

        true_r.style.opacity = "0";
        true_r.style.zIndex = "-1";
}