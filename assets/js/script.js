 /*=========================================
  NovaShield Official JavaScript
  Developed by Mehak Azeem
==========================================*/

/*============== PRELOADER ==============*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

});

/*============== STICKY NAVBAR ==============*/

const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

if (navToggle && navMenu) {

    const closeMenu = () => {

        navMenu.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");

    };

    navToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("is-open");

        navToggle.classList.toggle("is-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));

    });

    navMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });

    document.addEventListener("click", (event) => {

        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {

            closeMenu();

        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 991) {

            closeMenu();

        }

    });

}

/*============== SMOOTH SCROLL ==============*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href") || "";

        if (!href.startsWith("#")) {

            return;

        }

        e.preventDefault();

        const target = document.querySelector(href);

        if (!target) {

            return;

        }

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*============== ACTIVE MENU ==============*/

const sections = document.querySelectorAll("section");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        const href = (link.getAttribute("href") || "").replace(/^\//, "");

        link.classList.remove("active");

        if (href.startsWith("#") && href === "#" + current) {

            link.classList.add("active");

        }

        if (!href.startsWith("#") && href === currentPage) {

            link.classList.add("active");

        }

    });

});/*=========================================
  SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(
".service-card, .project-card, .why-card, .stat-box, .about-content, .about-image, .founder-container, .contact-container"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/*=========================================
  COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const triggerPoint = stats.offsetTop - 400;

    if (window.scrollY > triggerPoint) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);

/*=========================================
 CONTACT FORM
=========================================*/

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

contactForm.reset();

});

}

/*=========================================
 SCROLL TO TOP
=========================================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show-top");

}else{

topButton.classList.remove("show-top");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});