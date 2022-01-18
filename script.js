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

//reveal sections on scroll
window.addEventListener("scroll",reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
