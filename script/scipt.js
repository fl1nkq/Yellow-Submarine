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

let baton1 = document.getElementById("baton1");
let baton2 = document.getElementById("baton2");

let main_home = document.getElementById("main_home")
let main_home1 = document.getElementById("main_home1")

baton1.addEventListener("click", function(){
    main_home.style.right = "-2000px";
    main_home1.style.left = "0px";
})

baton2.addEventListener("click", function(){
    main_home.style.right = "0px";
    main_home1.style.left = "-2000px";
})

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

let svg_1 = document.getElementById("svg_1");
let svg_2 = document.getElementById("svg_2");
let svg_3 = document.getElementById("svg_3");
