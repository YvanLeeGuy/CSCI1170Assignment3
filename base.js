function confirmLeave(event){
    if (confirm("Are you sure you want to leave this website?") == false){
        event.preventDefault();
    }
}
function pinkify(){
    let stylesheet = document.styleSheets[0];
    stylesheet.cssRules[0].style.setProperty("--dark", "#e2366f");
    stylesheet.cssRules[0].style.setProperty("--light", "#fbc0d4");
    stylesheet.cssRules[0].style.setProperty("--mid", "rgba(226,54,111,0.2)");
    localStorage.setItem("theme", "pink");
}
function blueify(){
    let stylesheet = document.styleSheets[0];
    stylesheet.cssRules[0].style.setProperty("--dark", "#134f80");
    stylesheet.cssRules[0].style.setProperty("--light", "#a7d8ff");
    stylesheet.cssRules[0].style.setProperty("--mid", "rgba(111,160,199,0.4)");
    localStorage.setItem("theme", "blue");
}
function brownify(){
    let stylesheet = document.styleSheets[0];
    stylesheet.cssRules[0].style.setProperty("--dark", "#623103");
    stylesheet.cssRules[0].style.setProperty("--light", "#eaa666");
    stylesheet.cssRules[0].style.setProperty("--mid", "rgba(164,123,85,0.4)");
    localStorage.setItem("theme", "brown");
}

document.getElementById("social1").addEventListener("click", confirmLeave);
document.getElementById("social2").addEventListener("click", confirmLeave);
document.getElementById("social3").addEventListener("click", confirmLeave);

document.getElementById("pinkButton").addEventListener("click", pinkify);
document.getElementById("blueButton").addEventListener("click", blueify);
document.getElementById("brownButton").addEventListener("click", brownify);

if (localStorage.getItem("theme") === "blue"){
    blueify();
}
if (localStorage.getItem("theme") === "pink"){
    pinkify();
}
if (localStorage.getItem("theme") === "brown"){
    brownify();
}
function scrolldown(){
    window.scrollBy(0, 1100);
}

document.getElementById("hero").addEventListener("click", scrolldown);


