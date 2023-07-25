window.onload = function(){
    var darkmodebox = document.getElementById("darkmode");

    if (Cookies.get("wtl-darkmode") == "true") {
        darkmodebox.checked = true;
    } else {
        darkmodebox.checked = false;
    }

    darkmode();
}

function darkmode() {
    var darkmodebox = document.getElementById("darkmode");
    var icon = document.getElementById("darkmode-icon");
    var html = document.getElementById("html");

    if (darkmodebox.checked == true){
        html.classList.add("dark");
        icon.classList.add("icon-moon-o");
        icon.classList.remove("icon-sun-o");
        Cookies.set("wtl-darkmode", "true");
    } else {
        html.classList.remove("dark");
        icon.classList.add("icon-sun-o");
        icon.classList.remove("icon-moon-o");
        Cookies.set("wtl-darkmode", "false");
    }
}