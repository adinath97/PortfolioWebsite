//toggle about me section
var aboutMeContent = document.getElementById("AboutMe");
var aboutMeBtn = document.getElementById("AboutMeBtn");

aboutMeBtn.onclick = function() {
    aboutMeContent.classList.toggle("hidden");
}

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchorTag => {
    anchorTag.addEventListener("click",function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});