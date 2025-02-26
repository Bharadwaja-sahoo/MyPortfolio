window.onload = function () {
    document.getElementById('loader').style.display = 'none';
    document.body.classList.remove('loading');
};
//AOS script
AOS.init();

// lenis script
const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

document.querySelector(".switch").addEventListener("click", function () {
    var content = document.querySelector(".content");
    var nav = document.querySelector(".nav");
    var nav_a = document.querySelectorAll(".nav-list-a");
    var nav_a_before = document.documentElement;
    var mood = document.querySelector(".switch");
    var menu = document.querySelector(".menu");
    var logoh2_1 = document.querySelectorAll(".logo h2:nth-child(1)");
    var logoh2_2 = document.querySelectorAll(".logo h2:nth-child(2)");
    var hero_text = document.querySelectorAll(".hero_text");
    var rev_text = document.querySelectorAll(".text_rev");
    var btns = document.querySelectorAll(".btns");
    var about_img = document.querySelector(".about-img");
    var skillh2 = document.querySelectorAll(".skill_h2");
    let icon = document.getElementById("themeIcon");
    var spans = document.querySelectorAll(".spans");
    var spans_rev = document.querySelectorAll(".spans-rev");
    var buttons = document.querySelector(".buttons");
    var buttons_rev = document.querySelector(".buttons-rev");
    var contact_section = document.querySelector(".contact-section");
    var footer_section = document.querySelector(".footer-section");
    var social_icon = document.querySelectorAll(".social_icon");
    var back = document.querySelectorAll(".back");
    var card_button = document.querySelectorAll(".card-button");
    var line = document.querySelectorAll(".line");

    if (icon.classList.contains("ri-moon-fill")) {
        icon.classList.replace("ri-moon-fill", "ri-sun-fill");

        content.style.backgroundColor = "var(--white)";
        nav.style.backgroundColor="var(--dark)";
        nav.style.boxShadow="0px 0px 20px 0px var(--white)";
        nav_a.forEach(link => {
            link.style.color = "var(--white)";
        });
        nav_a_before.style.setProperty("--nav-before-bg", "var(--white)");
        mood.style.color = "var(--white)";
        menu.style.color = "var(--white)";
        logoh2_1.forEach(link => {
            link.style.color = "rgb(255 255 255 / 23%)";
        });
        logoh2_2.forEach(link => {
            link.style.color = "var(--white)";
        });
        hero_text.forEach(link => {
            link.style.color = "var(--dark)";
        });
        rev_text.forEach(link => {
            link.style.color = "var(--white)";
        });
        btns.forEach(link => {
            link.style.backgroundColor = "var(--dark)";
            link.style.color = "var(--white)";
            link.style.border="2px solid var(--white)";
        });
        
        skillh2.forEach(link => {
            link.style.border = "1px solid var(--dark)";
        });
        spans.forEach(link => {
            link.style.background = "linear-gradient(0deg, var(--dark), transparent)";
            link.style.webkitBackgroundClip = "text";
            link.style.webkitTextFillColor = "transparent";
        });
        spans_rev.forEach(link => {
            link.style.background = "linear-gradient(0deg, var(--white), transparent)";
            link.style.webkitBackgroundClip = "text";
            link.style.webkitTextFillColor = "transparent";
        });
        
        buttons_rev.style.backgroundColor = "var(--white)";
        buttons_rev.style.color = "var(--dark)";
        contact_section.style.backgroundColor = "var(--dark)";
        footer_section.style.backgroundColor = "var(--dark)";
        social_icon.forEach(link => {
            link.style.backgroundColor = "#b8c1ec61";
        });
        back.forEach(link => {
            link.style.backgroundColor = "var(--dark)";
        });                
        card_button.forEach(link => {
            link.style.color = "var(--white)";
            link.style.border = "2px solid var(--white)";
        });  
        about_img.style.border = "5px solid var(--dark)";
        about_img.style.boxShadow = "0px 0px 30px var(--dark)"; 
        buttons.style.backgroundColor = "var(--dark)";
        buttons.style.color = "var(--white)";
        line.forEach(link => {
            link.style.backgroundColor = "#00000013";
        });     
    } 
    else {
        icon.classList.replace("ri-sun-fill", "ri-moon-fill");

        content.style.backgroundColor = "var(--dark)";
        nav.style.backgroundColor = "var(--white)";
        nav.style.boxShadow="0px 0px 20px 0px var(--dark)";
        nav_a.forEach(link => {
            link.style.color = "var(--dark)";
        });
        nav_a_before.style.setProperty("--nav-before-bg", "var(--dark)");
        mood.style.color = "var(--dark)";
        menu.style.color = "var(--dark)";
        logoh2_1.forEach(link => {
            link.style.color = "rgba(0, 0, 0, 0.233)";
        });
        logoh2_2.forEach(link => {
            link.style.color = "var(--dark)";
        });
        hero_text.forEach(link => {
            link.style.color = "var(--white)";
        });
        rev_text.forEach(link => {
            link.style.color = "var(--dark)";
        });
        btns.forEach(link => {
            link.style.backgroundColor = "var(--white)";
            link.style.color = "var(--dark)";
            link.style.border="2px solid var(--dark)";
        });
        
        skillh2.forEach(link => {
            link.style.border = "1px solid var(--white)";
        });
        spans.forEach(link => {
            link.style.background = "linear-gradient(0deg, var(--white), transparent)";
            link.style.webkitBackgroundClip = "text";
            link.style.webkitTextFillColor = "transparent";
        });
        spans_rev.forEach(link => {
            link.style.background = "linear-gradient(0deg, var(--dark), transparent)";
            link.style.webkitBackgroundClip = "text";
            link.style.webkitTextFillColor = "transparent";
        });
        
        buttons_rev.style.backgroundColor = "var(--dark)";
        buttons_rev.style.color = "var(--white)";
        contact_section.style.backgroundColor = "var(--white)";
        footer_section.style.backgroundColor = "var(--white)";
        social_icon.forEach(link => {
            link.style.backgroundColor = "#1c203879";
        });
        back.forEach(link => {
            link.style.backgroundColor = "var(--white)";
        });
        card_button.forEach(link => {
            link.style.color = "var(--dark)";
            link.style.border = "2px solid var(--dark)";
        });
        about_img.style.border = "5px solid var(--white)";
        about_img.style.boxShadow = "0px 0px 30px var(--white)";
        buttons.style.backgroundColor = "var(--white)";
        buttons.style.color = "var(--dark)";
        line.forEach(link => {
            link.style.backgroundColor = "#ffffff13";
        });
    }
});

//menu-bar 
var menu=document.getElementById("menu");
var menuBox=document.getElementById("menu-bar");
var cross=document.querySelector(".cross");
var menutick=false;
function crossBar(){
    menuBox.style.display="none";
    menutick=false;
}
function menuBar(){
    if(menutick==false){
        menuBox.style.display="flex";
        menutick=true;
    }
    else{
        menuBox.style.display="none";
        menutick=false;
    }
}
function menuBarClose(){
    menuBox.style.display="none";
    menutick=false;
}

//skill gsap animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-section',
        pin: true,
        start: '50% 50%',
        end: '200% 50%',
        scrub: true,
        // markers: true,
    }
});
tl.to("#gsap",{
    opacity: 1,
    filter: "blur(0px)"
})
.to("#ajax",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#sql",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#mongo",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#tailwind",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#bootstrap",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#git",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#github",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#html",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#css",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#javascript",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#react",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#net",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#node",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#express",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})
.to("#jquery",{
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
})


//resume
let mm = gsap.matchMedia();
mm.add("(max-width: 999px)", () => {
    // GSAP animation for smaller screens
    return gsap.timeline({
        scrollTrigger: {
            trigger: "#resume-section",
            pin: true,
            start: "50% 50%",
            end: "150% 50%",
            scrub: true,
            // markers: true,
        }
    });
});
var resume = gsap.timeline({scrollTrigger:{
    trigger: "#resume-section",
    start:"10% 50%",
    end:"80% 50%",
    scrub: true,
    // markers: true,
}})

resume.to("#imgTwo",{
    rotateX: "0deg",
})
.to("#imgThree",{
    rotateX: "0deg",
})


//type-write
var typed = new Typed('#typed', {
    strings: ['UI Designer','Front-End Developer','WebSite Designer','Mechanical Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
// buttons click
document.getElementById("links1").addEventListener('click', function () {
    window.open("https://github.com/Bharadwaja-sahoo","_self");
});
document.getElementById("links2").addEventListener('click', function() {
    window.open("/Assets/images/BHARADWAJA_Resume.pdf","_self");
});