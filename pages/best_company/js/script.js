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