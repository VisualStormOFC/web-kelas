const menuToggle=document.getElementById("menuToggle"),menu=document.getElementById("menu");
if(menuToggle&&menu)menuToggle.addEventListener("click",()=>menu.classList.toggle("active"));
document.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>menu?.classList.remove("active")));
const themeToggle=document.getElementById("themeToggle"),themeIcon=document.getElementById("themeIcon");
function setTheme(light){document.body.classList.toggle("light-mode",light);if(themeIcon)themeIcon.textContent=light?"🌙":"☀️";localStorage.setItem("theme",light?"light":"dark")}
if(localStorage.getItem("theme")==="light")setTheme(true);
if(themeToggle)themeToggle.addEventListener("click",()=>setTheme(!document.body.classList.contains("light-mode")));
function reveal(){document.querySelectorAll(".reveal").forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-100)el.classList.add("active")})}
window.addEventListener("scroll",reveal);reveal();
/* =========================
   POSTER FULLSCREEN
========================= */

const posterLightbox =
    document.getElementById("posterLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


/* KLIK POSTER */

document
    .querySelectorAll(".student-poster img")
    .forEach(function(img) {

        img.addEventListener("click", function() {

            lightboxImage.src = this.src;

            lightboxImage.alt = this.alt;

            posterLightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


/* TUTUP */

function closeLightbox() {

    posterLightbox.classList.remove("active");

    document.body.style.overflow = "";

    setTimeout(function() {

        lightboxImage.src = "";

    }, 300);

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* KLIK AREA LUAR GAMBAR */

if (posterLightbox) {

    posterLightbox.addEventListener(
        "click",
        function(e) {

            if (e.target === posterLightbox) {

                closeLightbox();

            }

        }
    );

}


/* TOMBOL ESC */

document.addEventListener(
    "keydown",
    function(e) {

        if (
            e.key === "Escape" &&
            posterLightbox &&
            posterLightbox.classList.contains("active")
        ) {

            closeLightbox();

        }

    }
);