var input = document.getElementById('checkbox');
//container
var toggleColor=document.getElementById("container");
//nav bar
var navbar=document.getElementById("navbar");
//nav link
var navhome=document.getElementById("nav-home");
var navabout=document.getElementById("nav-about");
var navskills=document.getElementById("nav-skills");
var navcontacts=document.getElementById("nav-contacts")
//menu
var menulogo=document.getElementById("menu");

var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var homeDiv=document.getElementById("homeDiv");
var links1=document.getElementById("links1");
var links2=document.getElementById("links2");
var cursors=document.getElementById("cursor");
var cursorCircle=document.getElementById("cursor-circle");
var chakri=document.getElementById("chakri");
var chakri2=document.getElementById("chakri2");
var chakri3=document.getElementById("chakri3");
var aboutimg=document.getElementById("about-img");
var aboutText=document.getElementById("about-div2");
// skills
var html=document.getElementById("html");
var css=document.getElementById("css");
var js=document.getElementById("js");
var react=document.getElementById("react");
var mongo=document.getElementById("mongoDb");
var sql=document.getElementById("sql");
var boots=document.getElementById("boots");
//tech-box
var box1=document.getElementById("htmlbox");
var box2=document.getElementById("cssbox");
var box3=document.getElementById("jsbox");
var box4=document.getElementById("reactbox");
var box5=document.getElementById("mongobox");
var box6=document.getElementById("sql-box");
var box7=document.getElementById("bootbox");
//skills-logo
var lhtml=document.getElementById("html-logo");
var lcss=document.getElementById("css-logo");
var ljs=document.getElementById("js-logo");
var lreact=document.getElementById("react-logo");
var lsql=document.getElementById("sql-logo");
var lboot=document.getElementById("boot-logo");
//links
var fbook=document.getElementById("fbook");
var igram=document.getElementById("igram");
var ldin=document.getElementById("ldin");

input.addEventListener('change',function(){
    if(this.checked) {
        //container
        toggleColor.style.backgroundColor="#b8c1ec";
        //nav-link
        navhome.style.color="#b8c1ec";
        navabout.style.color="#b8c1ec";
        navskills.style.color="#b8c1ec";
        navcontacts.style.color="#b8c1ec";
        //nav-bar
        navbar.style.backgroundColor="#232946";
        navbar.style.boxShadow="0px 0px 20px #232946";
        //menu logo
        menulogo.style.color="#b8c1ec";
        //home
        text1.style.color="#232946";
        text2.style.color="#232946";
        homeDiv.style.color="#232946";
        links1.style.backgroundColor="#232946";
        links1.style.color="#b8c1ec";
        links2.style.backgroundColor="#232946";
        links2.style.color="#b8c1ec";
        chakri.src="./assets/black.png";
        //about
        chakri2.src="./assets/black.png";
        chakri3.src="./assets/black.png";
        aboutimg.style.border="5px solid #232946";
        aboutimg.style.boxShadow= "0px 0px 30px #232946"
        aboutText.style.color= "#232946";
        //cursor
        cursors.style.backgroundColor="#232946";
        cursorCircle.style.border="2px solid #232946";
        cursorCircle.style.boxShadow="0px 0px 100px 15px #232946";
        //links
        fbook.style.color="#232946";
        igram.style.color="#232946";
        ldin.style.color="#232946";
        //tech-box
        box1.style.backgroundColor="#232946";
        box1.style.boxShadow="0px 0px 20px #232946";

        box2.style.backgroundColor="#232946";
        box2.style.boxShadow="0px 0px 20px #232946";

        box3.style.backgroundColor="#232946";
        box3.style.boxShadow="0px 0px 20px #232946";

        box4.style.backgroundColor="#232946";
        box4.style.boxShadow="0px 0px 20px #232946";

        box5.style.backgroundColor="#232946";
        box5.style.boxShadow="0px 0px 20px #232946";

        box6.style.backgroundColor="#232946";
        box6.style.boxShadow="0px 0px 20px #232946";

        box7.style.backgroundColor="#232946";
        box7.style.boxShadow="0px 0px 20px #232946";
        // skills
        html.style.color="#b8c1ec";
        css.style.color="#b8c1ec";
        js.style.color="#b8c1ec";
        react.style.color="#b8c1ec";
        mongo.style.color="#b8c1ec";
        sql.style.color="#b8c1ec";
        boots.style.color="#b8c1ec";
        //skills-logo
        lhtml.style.color="#b8c1ec";
        lcss.style.color="#b8c1ec";
        ljs.style.color="#b8c1ec";
        lreact.style.color="#b8c1ec";
        lsql.style.color="#b8c1ec";
        lboot.style.color="#b8c1ec";
    } 
    else {
        //container
        toggleColor.style.backgroundColor="#232946";
        //nav-link
        navhome.style.color="#232946";
        navabout.style.color="#232946";
        navskills.style.color="#232946";
        navcontacts.style.color="#232946";
        //nav-bar
        navbar.style.backgroundColor="#b8c1ec";
        navbar.style.boxShadow="0px 0px 20px #b8c1ec";
        //menu logo
        menulogo.style.color="#232946";
        //home
        text1.style.color="#b8c1ec";
        text2.style.color="#b8c1ec";
        homeDiv.style.color="#b8c1ec";
        links1.style.backgroundColor="#b8c1ec";
        links1.style.color="#232946";
        links2.style.backgroundColor="#b8c1ec";
        links2.style.color="#232946";
        chakri.src="./assets/white.png";
        //about
        chakri2.src="./assets/white.png";
        chakri3.src="./assets/white.png";
        aboutimg.style.border="5px solid #b8c1ec";
        aboutimg.style.boxShadow= "0px 0px 30px #b8c1ec"
        aboutText.style.color= "#b8c1ec";
        //cursor
        cursors.style.backgroundColor="#b8c1ec";
        cursorCircle.style.border="2px solid #b8c1ec";
        cursorCircle.style.boxShadow="0px 0px 15px #b8c1ec";
        //links
        fbook.style.color="#b8c1ec";
        igram.style.color="#b8c1ec";
        ldin.style.color="#b8c1ec";
        //tech-box
        box1.style.backgroundColor="#b8c1ec";
        box1.style.boxShadow="0px 0px 20px #b8c1ec";

        box2.style.backgroundColor="#b8c1ec";
        box2.style.boxShadow="0px 0px 20px #b8c1ec";

        box3.style.backgroundColor="#b8c1ec";
        box3.style.boxShadow="0px 0px 20px #b8c1ec";

        box4.style.backgroundColor="#b8c1ec";
        box4.style.boxShadow="0px 0px 20px #b8c1ec";

        box5.style.backgroundColor="#b8c1ec";
        box5.style.boxShadow="0px 0px 20px #b8c1ec";

        box6.style.backgroundColor="#b8c1ec";
        box6.style.boxShadow="0px 0px 20px #b8c1ec";

        box7.style.backgroundColor="#b8c1ec";
        box7.style.boxShadow="0px 0px 20px #b8c1ec";
        // skills
        html.style.color="#232946";
        css.style.color="#232946";
        js.style.color="#232946";
        react.style.color="#232946";
        mongo.style.color="#232946";
        sql.style.color="#232946";
        boots.style.color="#232946";
        //skills-logo
        lhtml.style.color="#232946";
        lcss.style.color="#232946";
        ljs.style.color="#232946";
        lreact.style.color="#232946";
        lsql.style.color="#232946";
        lboot.style.color="#232946";
    }
});
// link open
links1.addEventListener('click', function () {
    window.open("https://github.com/Bharadwaja-sahoo","_self");
});
links2.addEventListener('click', function() {
    window.open("./assets/BHARADWAJA's Resume (1).pdf","_self");
});
//cursor
function cursor(){
    let dot=document.querySelector("#cursor")
    let back=document.querySelector("#cursor-circle")
        document.addEventListener("mousemove",function(abc){
        dot.style.left=abc.x-5+"px"
        dot.style.top=abc.y-5+"px"
        back.style.left=abc.x-26+"px"
        back.style.top=abc.y-26+"px"
    })
};
cursor();

//navbar
let navTl=gsap.timeline({
    scrollTrigger:{
        trigger:"#container",
        start:"30% 50%",
        end:"30.5% 50%",
        // markers:true,
        scrub:true,
    }
});
navTl
.to(".navbar",{
    width:"30vw",
},"b")
.to("#menu",{
    display:"flex"
},"b")
.to("#nav-div",{
    display:"none"
},"b");

//text 
let textTl=gsap.timeline({
    scrollTrigger:{
        trigger:"#welcome",
        start:"0% 50%",
        end:"100% 50%",
        // markers:true,
        scrub:1,
    },
})
textTl.to(".text-area-hover",{
    width:"100%",
})

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

//mobile message
var showImg=document.getElementById("showImg");
var showMessage=document.getElementById("showMessage");
var messageBox=document.getElementById("MBox");
var imgBox=document.getElementById("simg");
showImg.addEventListener('click', function () {
    messageBox.style.display="none";
    imgBox.style.display="flex";
})
showMessage.addEventListener('click',function(){
    messageBox.style.display="flex";
    imgBox.style.display="none";
})

// about gsap
var aboutTl = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        start:"0% 50%",
        end:"10% 50%",
        // markers:true,
        scrub:true,
    },
});
aboutTl
.from("#about-img",{
    x:-50,
    opacity:0,
},"a")
.from("#about-div2",{
    x:50,
    opacity:0,
},"a")
.from("#chakri2",{
    x:-50,
    opacity:0,
},"a")
.from("#chakri3",{
    x:50,
    opacity:0,
},"a")

// skills
var skillTl=gsap.timeline({
    scrollTrigger:{
        trigger:"#skills",
        start:"0% 50%",
        end:"10% 50%",
        // markers:true,
        scrub:true,
    }
});
skillTl.from(".tech",{
    y:-50,
    opacity:0,
});
//type-write
var typed = new Typed('#bold', {
    strings: ['Front-End Developer', 'WebSite Developer','Full-Stack-Java Developer' , 'Mechanical Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
  });