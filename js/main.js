let servicesSection = document.querySelector(".services");
let servicesBox = document.querySelectorAll(".services .srv-box");

let aboutSection = document.querySelector(".about");
let aboutImg = document.querySelector(".about img");

let statsSection = document.querySelector(".stats");
let number = document.querySelectorAll(".number");
let started = false;

let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog-holder .prog span");


window.onscroll = function(){
    if(window.scrollY >= servicesSection.offsetTop - 300){
        servicesBox.forEach(box => {
            box.classList.add("active");
        })
    }
    if(window.scrollY < servicesSection.offsetTop - 300){
        servicesBox.forEach(box => {
            box.classList.remove("active");
        })
    }
    if(window.scrollY >= aboutSection.offsetTop - 200){
            aboutImg.classList.add("active");
    }
    if(window.scrollY < aboutSection.offsetTop - 450){
            aboutImg.classList.remove("active");
    }

    if(window.scrollY >= statsSection.offsetTop -500){
        if(!started){
            number.forEach((num) => startCount(num));            
        }
        started = true;
    }

    if(window.scrollY >= skillsSection.offsetTop - 100){
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
        })
    }

}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 100 / goal);
}


let linksBtn = document.querySelector(".toggle-menu");
let linksUl = document.querySelector("nav ul")
linksBtn.onclick = function(e){
    e.stopPropagation();

    linksUl.classList.toggle("open")
    this.classList.toggle("active")
}

document.addEventListener("click", (e) => {

    if(e.target !== linksBtn && e.target !== linksUl){

        if(linksUl.classList.contains("open")){

            linksBtn.classList.toggle("active");

            linksUl.classList.toggle("open");
        }
    }
})


let searchIcon = document.querySelector("nav .form i");
let popup = document.querySelector("header .popup");
let submit = document.querySelector(".popup form input[type = submit]");
let exit = document.querySelector(".exit");
let input = document.querySelector(".popup form input[type = text]");
let box = document.querySelector("header .popup .content");

exit.onclick = function(){
    searchIcon.classList.toggle("active");
    popup.classList.toggle("active")
}
searchIcon.onclick = function(){
    this.classList.toggle("active");
    popup.classList.toggle("active");

    document.addEventListener("keyup", (e)=> {
        if(e.key === "Escape"){
            this.classList.remove("active");
            popup.classList.remove("active");        
        }
    })
}

document.addEventListener("click", (e)=> {
    if(e.target !== input && e.target !== box && e.target !== searchIcon ){
        if(searchIcon.classList.contains("active")){
            searchIcon.classList.toggle("active");
            popup.classList.toggle("active")
            
        }
    }
})

document.querySelector(".popup form").onsubmit = function(e){
    window.location.reload();
}

let links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", (e) => {

        links.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active");
    })
})
// Scrolling And Add Active To Current Section 
let li = document.querySelectorAll(".links a");
let sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;

    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    links.forEach((link) => link.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


// Change Background Image
let leftIcon = document.querySelector(".move-left");
let rightIcon = document.querySelector(".move-right");
let landing = document.querySelector(".landing");
let imgsArray = ["landing.jpg", "landing1.jpg", "landing2.jpg"];

let i = 1;

rightIcon.onclick= function(){
        if(i < imgsArray.length-1){
            landing.style.backgroundImage = "url(imgs/"+imgsArray[i+1] +")";
            i++;
            activate();
        }
}
leftIcon.onclick= function(){
    if(i <= imgsArray.length && i > 0){
        landing.style.backgroundImage = "url(imgs/"+imgsArray[i-1] +")";
        i--;
        activate();
    }
}

let bullets = document.querySelectorAll(".bullets li");
function activate(){bullets.forEach(bullet => {
    bullet.classList.remove("active")
    if(i === 0){
        bullets[0].classList.add("active");
    }
    if(i === 1){
        bullets[1].classList.add("active");
    }
    if(i === 2){
        bullets[2].classList.add("active");
    }
});
}

let shuffle = document.querySelectorAll(".shuffle li");
let boxes = document.querySelectorAll(".imgs-container .box");

shuffle.forEach(link => {
    link.addEventListener("click", (e) => {
        shuffle.forEach(link => link.classList.remove("active"));
        boxes.forEach(box => {
            box.classList.remove("active")
        });
        e.target.classList.add("active");
        if(e.target.dataset.info === "all"){
            boxes.forEach(box => box.classList.add("active"))
        }
        if(e.target.dataset.info === "app"){
            boxes.forEach(box => {
                if(box.dataset.info === "app"){
                    box.classList.add("active")
                }
            })
        }
        if(e.target.dataset.info === "photo"){
            boxes.forEach(box => {
                if(box.dataset.info === "photo"){
                    box.classList.add("active")
                }
            })
        }
        if(e.target.dataset.info === "web"){
            boxes.forEach(box => {
                if(box.dataset.info === "web"){
                    box.classList.add("active")
                }
            })
        }
        if(e.target.dataset.info === "print"){
            boxes.forEach(box => {
                if(box.dataset.info === "print"){
                    box.classList.add("active")
                }
            })
        }
    })
});


let testiBullets = document.querySelectorAll(".testimonials .bullets li");
let testiBoxes = document.querySelectorAll(".testimonials .content-box");

testiBullets.forEach(bullet => {

    bullet.addEventListener("click", (e) => {
        testiBullets.forEach(bullet => bullet.classList.remove("active"));
        e.target.classList.add("active");

        if(e.target.dataset.spec == 1){
            testiBoxes.forEach(box => {
                if(box.dataset.spec == 1){
                    testiBoxes.forEach(box => box.classList.remove("active"));
                    box.classList.add("active");
                }
            })
        }
        if(e.target.dataset.spec == 2){
            testiBoxes.forEach(box => {
                if(box.dataset.spec == 2){
                    testiBoxes.forEach(box => box.classList.remove("active"));
                    box.classList.add("active");
                }
            })
        }
        if(e.target.dataset.spec == 3){
            testiBoxes.forEach(box => {
                if(box.dataset.spec == 3){
                    testiBoxes.forEach(box => box.classList.remove("active"));
                    box.classList.add("active");
                }
            })
        }
    });


})

/*

links.forEach(link => {
    link.addEventListener("click", (e) => {

        links.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active");
    })
})

*/