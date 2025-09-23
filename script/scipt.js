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