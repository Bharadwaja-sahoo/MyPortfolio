var input = document.getElementById('checkbox');
//container
var toggleColor=document.getElementById("container");
//nav bar
var navbar=document.getElementById("navbar");
//nav link
var navhome=document.getElementById("nav-home");
var navabout=document.getElementById("nav-about");
var navskills=document.getElementById("nav-skills");
var navprojects=document.getElementById("nav-projects");
var navwork=document.getElementById("nav-work");
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
var abouth1=document.getElementById("abouth1");
var aboutimg=document.getElementById("about-img");
var aboutText=document.getElementById("about-div2");
// skills
var sh1=document.getElementById("sh1");
var sh2=document.getElementById("sh2");

var html=document.getElementById("html");
var css=document.getElementById("css");
var js=document.getElementById("js");
var react=document.getElementById("react");
var mongo=document.getElementById("mongoDb");
var sql=document.getElementById("sql");
var boots=document.getElementById("boots");
var java=document.getElementById("java")

var professiontext=document.getElementById("roundtext");
var path1=document.getElementById("path1");
var path2=document.getElementById("path2");
var path3=document.getElementById("path3");
var path4=document.getElementById("path4");

//skills
var box1=document.getElementById("htmlbox");
var box2=document.getElementById("cssbox");
var box3=document.getElementById("jsbox");
var box4=document.getElementById("reactbox");
var box5=document.getElementById("mongobox");
var box6=document.getElementById("sql-box");
var box7=document.getElementById("bootbox");
var box8=document.getElementById("javabox")
//links
var fbook=document.getElementById("fbook");
var igram=document.getElementById("igram");
var ldin=document.getElementById("ldin");
//projects
var pBox1=document.getElementById("pbox1");
var pBox2=document.getElementById("pbox2");
var pBox3=document.getElementById("pbox3");
var pBox4=document.getElementById("pbox4");
var pBox5=document.getElementById("pbox5");
var pBox6=document.getElementById("pbox6");
var pBox7=document.getElementById("pbox7");
var pBox8=document.getElementById("pbox8");
var pBox9=document.getElementById("pbox9");

var workbox=document.getElementById("workLink");

var pbutton1=document.getElementById("pbutton1");
var pbutton2=document.getElementById("pbutton2");
var pbutton3=document.getElementById("pbutton3");
var pbutton4=document.getElementById("pbutton4");
var pbutton5=document.getElementById("pbutton5");
var pbutton6=document.getElementById("pbutton6");
var pbutton7=document.getElementById("pbutton7");
var pbutton8=document.getElementById("pbutton8");
var pbutton9=document.getElementById("pbutton9");

var pview1=document.getElementById("pview1");
var pview2=document.getElementById("pview2");
var pview3=document.getElementById("pview3");
var pview4=document.getElementById("pview4");
var pview5=document.getElementById("pview5");
var pview6=document.getElementById("pview6");
var pview7=document.getElementById("pview7");
var pview8=document.getElementById("pview8");
var pview9=document.getElementById("pview9");

var moon=document.getElementById("moon")
var sun=document.getElementById("sun")


input.addEventListener('change',function(){
    if(this.checked) {
        //container
        toggleColor.style.backgroundColor="#9baaf7";
        //nav-link
        navhome.style.color="#b8c1ec";
        navabout.style.color="#b8c1ec";
        navskills.style.color="#b8c1ec";
        navprojects.style.color="#b8c1ec";
        navwork.style.color="#b8c1ec";
        navcontacts.style.color="#b8c1ec";
        //nav-bar
        navbar.style.backgroundColor="#232946";
        navbar.style.boxShadow="0px 0px 20px #232946";
        //switch
        sun.style.color="transparent";
        moon.style.color="#f1c40f";
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
        abouth1.style.color="#232946";
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
        box1.style.backgroundColor="#23294699";
        box2.style.backgroundColor="#23294699";
        box3.style.backgroundColor="#23294699";
        box4.style.backgroundColor="#23294699";
        box5.style.backgroundColor="#23294699";
        box6.style.backgroundColor="#23294699";
        box7.style.backgroundColor="#23294699";
        box8.style.backgroundColor="#23294699";

        box1.style.color="#b8c1ec";
        box2.style.color="#b8c1ec";
        box3.style.color="#b8c1ec";
        box4.style.color="#b8c1ec";
        box5.style.color="#b8c1ec";
        box6.style.color="#b8c1ec";
        box7.style.color="#b8c1ec";
        box8.style.color="#b8c1ec";
        // skills
        sh1.style.color="#232946";
        sh2.style.color="#232946";

        html.style.backgroundColor="#6A6D78";
        css.style.backgroundColor="#6A6D78";
        js.style.backgroundColor="#6A6D78";
        react.style.backgroundColor="#6A6D78";
        mongo.style.backgroundColor="#6A6D78";
        sql.style.backgroundColor="#6A6D78";
        boots.style.backgroundColor="#6A6D78";
        java.style.backgroundColor="#6A6D78";

        professiontext.style.color="#232946";
        path1.style.stroke="#6A6D78";
        path2.style.stroke="#6A6D78";
        path3.style.stroke="#6A6D78";
        path4.style.stroke="#6A6D78";
        //projects
        ph1.style.color="#232946";
        workbox.style.backgroundColor="#232946";
        workbox.style.color="#b8c1ec";

        pBox1.style.backgroundColor="#232946";
        pBox2.style.backgroundColor="#232946";
        pBox3.style.backgroundColor="#232946";
        pBox4.style.backgroundColor="#232946";
        pBox5.style.backgroundColor="#232946";
        pBox6.style.backgroundColor="#232946";
        pBox7.style.backgroundColor="#232946";
        pBox8.style.backgroundColor="#232946";
        pBox9.style.backgroundColor="#232946";

        pBox1.style.color="#b8c1ec";
        pBox2.style.color="#b8c1ec";
        pBox3.style.color="#b8c1ec";
        pBox4.style.color="#b8c1ec";
        pBox5.style.color="#b8c1ec";
        pBox6.style.color="#b8c1ec";
        pBox7.style.color="#b8c1ec";
        pBox8.style.color="#b8c1ec";
        pBox9.style.color="#b8c1ec";

        pbutton1.style.backgroundColor="#b8c1ec";
        pbutton2.style.backgroundColor="#b8c1ec";
        pbutton3.style.backgroundColor="#b8c1ec";
        pbutton4.style.backgroundColor="#b8c1ec";
        pbutton5.style.backgroundColor="#b8c1ec";
        pbutton6.style.backgroundColor="#b8c1ec";
        pbutton7.style.backgroundColor="#b8c1ec";
        pbutton8.style.backgroundColor="#b8c1ec";
        pbutton9.style.backgroundColor="#b8c1ec";

        pview1.style.color="#232946";
        pview2.style.color="#232946";
        pview3.style.color="#232946";
        pview4.style.color="#232946";
        pview5.style.color="#232946";
        pview6.style.color="#232946";
        pview7.style.color="#232946";
        pview8.style.color="#232946";
        pview9.style.color="#232946";
    } 
    else {
        //container
        toggleColor.style.backgroundColor="#232946";
        //nav-link
        navhome.style.color="#232946";
        navabout.style.color="#232946";
        navskills.style.color="#232946";
        navprojects.style.color="#232946";
        navwork.style.color="#232946";
        navcontacts.style.color="#232946";
        //nav-bar
        navbar.style.backgroundColor="#b8c1ec";
        navbar.style.boxShadow="0px 0px 20px #b8c1ec";
        //switch
        sun.style.color="#f1c40f";
        moon.style.color="transparent";
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
        abouth1.style.color="#b8c1ec";
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
        box1.style.backgroundColor="#b8c1ec6a";
        box2.style.backgroundColor="#b8c1ec6a";
        box3.style.backgroundColor="#b8c1ec6a";
        box4.style.backgroundColor="#b8c1ec6a";
        box5.style.backgroundColor="#b8c1ec6a";
        box6.style.backgroundColor="#b8c1ec6a";
        box7.style.backgroundColor="#b8c1ec6a";
        box8.style.backgroundColor="#b8c1ec6a";

        box1.style.color="#232946";
        box2.style.color="#232946";
        box3.style.color="#232946";
        box4.style.color="#232946";
        box5.style.color="#232946";
        box6.style.color="#232946";
        box7.style.color="#232946";
        box8.style.color="#232946";
        // skills
        sh1.style.color="#b8c1ec";
        sh2.style.color="#b8c1ec";

        html.style.backgroundColor="#b8c1ec";
        css.style.backgroundColor="#b8c1ec";
        js.style.backgroundColor="#b8c1ec";
        react.style.backgroundColor="#b8c1ec";
        mongo.style.backgroundColor="#b8c1ec";
        sql.style.backgroundColor="#b8c1ec";
        boots.style.backgroundColor="#b8c1ec";
        java.style.backgroundColor="#b8c1ec";

        professiontext.style.color="#b8c1ec";
        path1.style.stroke="#b8c1ec"
        path2.style.stroke="#b8c1ec";
        path3.style.stroke="#b8c1ec";
        path4.style.stroke="#b8c1ec";
        //projects
        ph1.style.color="#b8c1ec";
        workbox.style.backgroundColor="#b8c1ec";
        workbox.style.color="#232946";

        pBox1.style.backgroundColor="#b8c1ec";
        pBox2.style.backgroundColor="#b8c1ec";
        pBox3.style.backgroundColor="#b8c1ec";
        pBox4.style.backgroundColor="#b8c1ec";
        pBox5.style.backgroundColor="#b8c1ec";
        pBox6.style.backgroundColor="#b8c1ec";
        pBox7.style.backgroundColor="#b8c1ec";
        pBox8.style.backgroundColor="#b8c1ec";
        pBox9.style.backgroundColor="#b8c1ec";

        pBox1.style.color="#232946";
        pBox2.style.color="#232946";
        pBox3.style.color="#232946";
        pBox4.style.color="#232946";
        pBox5.style.color="#232946";
        pBox6.style.color="#232946";
        pBox7.style.color="#232946";
        pBox8.style.color="#232946";
        pBox9.style.color="#232946";

        pbutton1.style.backgroundColor="#232946"
        pbutton2.style.backgroundColor="#232946"
        pbutton3.style.backgroundColor="#232946"
        pbutton4.style.backgroundColor="#232946"
        pbutton5.style.backgroundColor="#232946"
        pbutton6.style.backgroundColor="#232946"
        pbutton7.style.backgroundColor="#232946"
        pbutton8.style.backgroundColor="#232946"
        pbutton9.style.backgroundColor="#232946"
        
        pview1.style.color="#b8c1ec";
        pview2.style.color="#b8c1ec";
        pview3.style.color="#b8c1ec";
        pview4.style.color="#b8c1ec";
        pview5.style.color="#b8c1ec";
        pview6.style.color="#b8c1ec";
        pview7.style.color="#b8c1ec";
        pview8.style.color="#b8c1ec";
        pview9.style.color="#b8c1ec";
    }
});
// link open
function handelLinks(){
    links1.addEventListener('click', function () {
        window.open("https://github.com/Bharadwaja-sahoo","_self");
    });
    links2.addEventListener('click', function() {
        window.open("./assets/BHARADWAJA's Resume (1).pdf","_self");
    });
}
handelLinks();
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
    width:"300px",
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


//scroll-reveal
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:300,
    reset:true,
})
sr.reveal('#about','#skillSection','#projects')
sr.reveal('#about-img',{origin:'left'})
sr.reveal('#about-div2',{origin:'right'})
sr.reveal('.Technical-bars',{origin:'left'})
sr.reveal('.radial-bars',{origin:'right'})
sr.reveal('#projects',{interval:100})
//type-write
var typed = new Typed('#bold', {
    strings: ['Front-End Developer', 'WebSite Developer','Full-Stack-Java Developer' , 'Mechanical Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

//project
function projects(){
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}
projects();