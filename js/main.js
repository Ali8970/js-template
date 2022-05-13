// let land = document.querySelector(".landing");
// let allimages = ["../images/01.jpg","../images/02.jpg","../images/03.jpg","../images/04.jpg","../images/05.jpg",];

// let option = document.querySelector(".setting-box");
// document.getElementById("op").onclick = function(){
//     this.classList.toggle("fa-spin");
//     option.classList.toggle("open");
// }
// let localColor = localStorage.getItem("coloroption");
// let coloroption;
// if(localColor !== null){
//     document.documentElement.style.setProperty('--main-color',localColor);

//     document.querySelectorAll(".color-list li").forEach(element => {
//             element.classList.remove("active")
//             if(element.dataset.color === localColor){
//                 element.classList.add("active");
//             }
//         })

// }


// document.querySelectorAll(".color-list li").forEach(li => {
//     li.addEventListener("click",function(e){
//         document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
//         localStorage.setItem("coloroption",e.target.dataset.color);
//         e.target.parentElement.querySelectorAll(".active").forEach(element =>  {
//             element.classList.remove("active")
//         })
//         e.target.classList.add("active");

//     })
// })


// let interval;
// let i =true;
// let backgroundoption;
// document.querySelectorAll(".random span").forEach(span => {
//     span.addEventListener("click",function(e){
//         if(e.target.dataset.background === "yes"){
//             i=true;
//             interval = setInterval(() => {
//                 let randomnum = Math.floor(Math.random() * allimages.length);
//                 land.style.backgroundImage = 'url("images/' + allimages[randomnum] + '")';
//             },1000)
//             localStorage.setItem("backgroundoption",true);
//         }
//         else {
//             i=false;
//             clearInterval(interval);
//             localStorage.setItem("backgroundoption",false);
//         }
//         e.target.parentElement.querySelectorAll(".active").forEach(element =>  {
//             element.classList.remove("active")
//         })
//         e.target.classList.add("active");

//     })
// })
// if(i===true){
//     interval = setInterval(() => {
//         let randomnum = Math.floor(Math.random() * allimages.length);
//         land.style.backgroundImage = 'url("images/' + allimages[randomnum] + '")';
//     },1000)
// }
// let localbackground = localStorage.getItem("backgroundoption");
// if(localbackground !== null){
//     if(localbackground === 'true'){
//         i=true;
//     }
//     else {
//         i=false;
//     }

// document.querySelectorAll(".random span").forEach(element => {
//     element.classList.remove("active");
//     if(element.dataset.backgroundImage === localbackground){
//         element.classList.add("active");
//     }
// })


/*--------------------------------------------------------------------------------------------------------------------------------*/




let landing = document.querySelector(".landing");
let allimage = ["../images/01.jpg", "../images/02.jpg", "../images/03.jpg", "../images/04.jpg", "../images/05.jpg"];
// setInterval(() => {
//     let randomNum = Math.floor(Math.random() * allimage.length);
//     landing.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
// } ,1000);


document.getElementById("op").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}

let localColor = localStorage.getItem("color-option");
if (localColor !== null) {
    document.documentElement.style.setProperty('--main-color', localColor);

    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === localColor) {
            element.classList.add("active");
        }
    })
}

function addremove(event) {
    event.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    })
    event.target.classList.add("active");
}

const allli = document.querySelectorAll(".color-list li");
allli.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
        addremove(e);
    });
});

let interval;
let backgroundOption = true;

let background_option;
let localbackground = localStorage.getItem("background_option");
if (localbackground !== null) {
    if (localbackground === 'true') {
        backgroundOption = true;
    }
    else {
        backgroundOption = false;
    }
    document.querySelectorAll(".random span").forEach(span => {
        span.classList.remove("active");

        if (span.dataset.background === (localbackground === 'true' ? "yes" : "no")) {
            span.classList.add("active");
        }
    })
}
function randombackground() {
    if (backgroundOption === true) {
        interval = setInterval(() => {
            let randomNum = Math.floor(Math.random() * allimage.length);
            landing.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
        }, 1000);
    }
};
randombackground();


let spans = document.querySelectorAll(".random span");
spans.forEach(span => {
    span.addEventListener("click", (e) => {
        addremove(e);
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randombackground();
            localStorage.setItem("background_option", true);
        }
        else {
            backgroundOption = false;
            clearInterval(interval);
            localStorage.setItem("background_option", false);
        }


        // if(e.target.dataset.background === "yes"){
        //     interval = setInterval(() => {
        //     let randomNum = Math.floor(Math.random() * allimage.length);
        //     landing.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
        //     } ,1000);
        // }
        // else {
        //     clearInterval(interval);
        // }
    })
})

let myskills = document.querySelector(".skills");
window.onscroll = function () {
    let skilloffsettop = myskills.offsetTop;
    let skilloffsetHeight = myskills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;

    if (windowscrolltop > (skilloffsettop + skilloffsetHeight - windowHeight)) {
        let allskills = document.querySelectorAll(".skill-box .skill-progress span");
        allskills.forEach(span => {
            span.style.width = span.dataset.progress;
        });
    }

};

let allimages = document.querySelectorAll(".gallery img");
allimages.forEach(img => {
    img.addEventListener("click", (e) => {
        let popupoverlay = document.createElement("div");
        popupoverlay.className = "popup-overlay";
        document.body.appendChild(popupoverlay);

        let popupbox = document.createElement("div");
        popupbox.className = "popup-box";

        let heading = document.createElement("h3");
        let headtxt = document.createTextNode(img.alt);
        // let headtxt = document.createTextNode(e.target.alt);
        heading.appendChild(headtxt);
        popupbox.appendChild(heading);
        document.body.appendChild(popupbox);

        let popupimg = document.createElement("img");
        popupimg.src = img.src;
        // popupimg.src = e.target.src;
        popupbox.appendChild(popupimg);
        document.body.appendChild(popupbox);

        let closebutton = document.createElement("span");
        closebutton.className = "close-button";
        let close = document.createTextNode("x");
        closebutton.appendChild(close);
        popupbox.appendChild(closebutton);
        document.body.appendChild(popupbox);



    });
});

document.addEventListener("click", (e) => {
    if (e.target.className == "close-button" || e.target.className == "popup-overlay") {
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-overlay").remove();
    }
})


function scrolltosection(element) {
    element.forEach(bullet => {
        bullet.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    })
}

let allbullets = document.querySelectorAll(".nav-bullets .bullet");
scrolltosection(allbullets);

let alllinks = document.querySelectorAll(".header ul li");
scrolltosection(alllinks);

// let allbullet = document.querySelectorAll(".nav-bullets .bullet");
// allbullet.forEach(bullet => {
//     bullet.addEventListener("click", (e) => {
//         if(e.target.dataset.section === ".about-us"){
//             window.scrollTo(0, 350);
//         }
//         else if(e.target.dataset.section === ".skills"){
//             window.scrollTo(0, 970);
//         }
//         else if(e.target.dataset.section === ".gallery"){
//             window.scrollTo(0, 1500);
//         }
//         else if(e.target.dataset.section === ".timeline"){
//             window.scrollTo(0, 2030);
//         }
//         else if(e.target.dataset.section === ".features"){
//             window.scrollTo(0, 3150);
//         }
//         else if(e.target.dataset.section === ".testimonials"){
//             window.scrollTo(0, 3800);
//         }
//     })
// })
let allBullets = document.querySelector(".nav-bullets");
let showBullets = document.querySelectorAll(".Bullets span");
let localBullet = localStorage.getItem("bulletOption");
if (localBullet !== null) {
    showBullets.forEach(span => {
        span.classList.remove("active");
        if (localBullet === "block") {
            allBullets.style.display = 'block';
            document.querySelector(".Bullets .yes").classList.add("active");
        }
        else {
            allBullets.style.display = 'none';
            document.querySelector(".Bullets .no").classList.add("active");
        }

    })
}

showBullets.forEach(span => {
    span.addEventListener("click", (e) => {
        addremove(e);
        if (e.target.dataset.bullets === "yes") {
            allBullets.style.display = 'block';
            localStorage.setItem("bulletOption", "block");
        }
        else {
            allBullets.style.display = 'none';
            localStorage.setItem("bulletOption", "none");
        }
    })
})



// let allBullets = document.querySelector(".nav-bullets");
// let showBullets = document.querySelectorAll(".Bullets span");
// showBullets.forEach(span => {
//     span.addEventListener("click", (e) => {
//         addremove(e);
//         if(e.target.dataset.bullets === "yes"){
//             allBullets.classList.remove("none");
//         }
//         else if(e.target.dataset.bullets === "no"){
//             allBullets.classList.add("none");
//         }
//     })
// })


document.querySelector(".setting-box .reset-options").onclick = () => {
    // localStorage.clear();
    localStorage.removeItem("color-option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bulletOption");

    window.location.reload();
}
let men = document.querySelector(".menu");
let arrow = document.querySelector(".header ul");
// men.onclick = (e) => {
//     e.stopPropagation()
// };

document.onclick = (e) => {
    if (e.target.className == "menu" || e.target.className == "m") {
        arrow.classList.toggle("none");
        men.classList.toggle("none");
    }
    else {
        arrow.classList.remove("none");
        men.classList.remove("none");
    }

};




