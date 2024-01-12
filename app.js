// NAVBAR
const sidemenu = document.getElementById("side-menu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// ABOUT
const tabtitles = document.getElementsByClassName("tab-title")
const tabcontents = document.getElementsByClassName("tab-content")

function activetab(tabname){
    for(tabtitle of tabtitles){
        tabtitle.classList.remove("active-title");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-title");
    document.getElementById(tabname).classList.add("active-content")
}

