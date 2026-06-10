const inPagesFolder = window.location.pathname.includes('/Pages/');

const navLinks = inPagesFolder?[
    { name: "Home", href: "../index.html"},
    { name: "About", href: "about.html"},
    { name: "Artworks", href: "artworks.html"},
    { name: "Animations", href: "animations.html"},
    { name: "Contact", href: "contact.html"}
] : [
    { name: "Home", href: "index.html"},
    { name: "About", href: "Pages/about.html"},
    { name: "Artworks", href: "Pages/artworks.html"},
    { name: "Animations", href: "Pages/animations.html"},
    { name: "Contact", href: "Pages/contact.html"}
];

function buildNav(){ 
    const nav=document.getElementById("desktop-nav");

    const ul=document.createElement("ul"); 
    ul.classList.add("navigation-links", "italianno-regular"); 

    navLinks.forEach(link =>{
        const li=document.createElement("li");
        const a=document.createElement("a");
        a.href=link.href;
        a.textContent=link.name;

        if (window.location.pathname.includes(link.href)){
            a.classList.add("active");
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul)

    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");
    hamburger.setAttribute("aria-label", "Toggle menu");

hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

const dropdown = document.createElement("div");
dropdown.classList.add("hamburger-menu");

const mobileLinks = document.createElement("ul");
mobileLinks.classList.add("mobile-links", "italianno-regular");

navLinks.forEach(link =>{
    const li=document.createElement("li");
    const a=document.createElement("a");
    a.href=link.href;
    a.textContent=link.name;
    li.appendChild(a);
    mobileLinks.appendChild(li);
});

dropdown.appendChild(mobileLinks);

mobileLinks.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click", ()=>{
        hamburger.classList.remove("open");
        dropdown.classList.remove("open")
    });
});

hamburger.addEventListener("click", (e) =>{ //open and closing the hamburger menu
    e.stopPropagation();
    hamburger.classList.toggle("open");
    dropdown.classList.toggle("open");
});

document.addEventListener("click", (e) =>{
    if (!e.target.closest("nav")&& !e.target.closest(".hamburger-menu")){
        hamburger.classList.remove("open");
        dropdown.classList.remove("open");
    }
});

nav.appendChild(hamburger); //appending it to the navigation 
nav.appendChild(dropdown);
   
}

buildNav();


   