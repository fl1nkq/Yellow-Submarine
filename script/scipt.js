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


