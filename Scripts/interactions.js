const slides=document.querySelectorAll(".slides img");//for the scroll slider on artworks page
if(slides.length>0){

let slideIndex=0;
let intervalId= null;

function initializeSlider(){
    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId =setInterval(nextSlide, 3000); // the slide will scroll by itself every 3 seconds
    }
}

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slideIndex = (index + slides.length) % slides.length;
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    showSlide(slideIndex - 1);
}

function nextSlide(){
    showSlide(slideIndex + 1);
}

initializeSlider(); 
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox){
    document.querySelectorAll(".slide, .slide2, .static-img, .photo-img").forEach(img =>{ //applies the lightbox for the slides and the images//
        img.addEventListener("click", () =>{
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
        });
    });

    lightboxClose.addEventListener("click", () =>{
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) =>{
        if (e.target === lightbox){
            lightbox.classList.remove("active");
        }
    });
}

const slides2=document.querySelectorAll(".slides2 img");
let slideIndex2 = 0;
if(slides2.length>0){


function initializeSlider2(){
    if (slides2.length > 0) {
        slides2[slideIndex2].classList.add("displaySlide2");
        setInterval(nextSlide2, 3000);
    }
}

function showSlide2(index){
    slides2.forEach(slide => slide.classList.remove("displaySlide2"));
    slideIndex2 = (index + slides2.length) % slides2.length;
    slides2[slideIndex2].classList.add("displaySlide2");
}

function prevSlide2(){
    showSlide2(slideIndex2 - 1);
}

function nextSlide2(){
    showSlide2(slideIndex2 + 1);
}

initializeSlider2();
}


const carouselIndexes={1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

function miniShow(carouselNum, index){
    const carousel = document.getElementById(`carousel${carouselNum}`);
    if (!carousel) return;

    const miniSlides = carousel.querySelectorAll(".mini-slide");
    if (miniSlides.length === 0) return;

    miniSlides.forEach(vid =>{
        vid.classList.remove("active-slide");
        vid.pause();
        vid.currentTime =0;
    });

    carouselIndexes[carouselNum]= (index + miniSlides.length) % miniSlides.length;
    const activeSlide = miniSlides[carouselIndexes[carouselNum]];

    if (!activeSlide) return;

    activeSlide.classList.add("active-slide");
}

function miniPrev(carouselNum){
    miniShow(carouselNum, carouselIndexes[carouselNum] - 1);
}

function miniNext(carouselNum){
    miniShow(carouselNum, carouselIndexes[carouselNum] + 1);
}

const videoLightbox= document.getElementById("videoLightbox");
const lightboxVideo= document.getElementById("lightboxVideo");
const videoLightboxClose= document.getElementById("videoLightboxClose");

if (videoLightbox){
    document.querySelectorAll(".mini-carousel").forEach(carousel =>{
        carousel.addEventListener("click", (e) =>{
            if (e.target.classList.contains("mini-prev") ||
                e.target.classList.contains("mini-next")) return;
            
            const activeVideo= carousel.querySelector(".active-slide");
            lightboxVideo.src= activeVideo.src;
            lightboxVideo.play();
            videoLightbox.classList.add("active");
        });
    });

    videoLightboxClose.addEventListener("click", () =>{
        videoLightbox.classList.remove("active");
        lightboxVideo.pause();
        lightboxVideo.src = "";
    });

    videoLightbox.addEventListener("click", (e) =>{
        if (e.target === videoLightbox){
            videoLightbox.classList.remove("active");
            lightboxVideo.pause();
            lightboxVideo.src = "";
        }
    });
}


const contactForm=document.querySelector(".contact-form");
const thankYouMsg=document.getElementById("thankYouMsg");

if (contactForm){
    contactForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        contactForm.style.display="none";
        thankYouMsg.style.display="block";
    });
}

const loader=document.getElementById("loader");
if (loader){
    window.addEventListener("load",()=>{
        setTimeout(()=>{
            loader.classList.add("hidden");
        },800);
    });
}