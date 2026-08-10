const menuToggle=document.getElementById("menuToggle"),menu=document.getElementById("menu");
if(menuToggle&&menu)menuToggle.addEventListener("click",()=>menu.classList.toggle("active"));
document.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>menu?.classList.remove("active")));
const themeToggle=document.getElementById("themeToggle"),themeIcon=document.getElementById("themeIcon");
function setTheme(light){document.body.classList.toggle("light-mode",light);if(themeIcon)themeIcon.textContent=light?"🌙":"☀️";localStorage.setItem("theme",light?"light":"dark")}
if(localStorage.getItem("theme")==="light")setTheme(true);
if(themeToggle)themeToggle.addEventListener("click",()=>setTheme(!document.body.classList.contains("light-mode")));
function reveal(){document.querySelectorAll(".reveal").forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-100)el.classList.add("active")})}
window.addEventListener("scroll",reveal);reveal();