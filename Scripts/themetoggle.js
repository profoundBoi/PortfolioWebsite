const themeBtn = document.getElementById("themeBtn");
const themeDropdown = document.getElementById("themeDropdown");


themeBtn.addEventListener("click", () =>{ //opens and closes the dropdown
    themeDropdown.classList.toggle("open");
});

document.addEventListener("click", (e) =>{ //closes it when you click outside of it 
    if (!e.target.closest(".themetoggle")){
        themeDropdown.classList.remove("open");
    }
});


document.getElementById("lightMode").addEventListener("click", () =>{ //light and dark mode themes
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    themeDropdown.classList.remove("open");
});

document.getElementById("darkMode").addEventListener("click", () =>{
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    themeDropdown.classList.remove("open");
});


const savedTheme = localStorage.getItem("theme"); //this makes sure that the set theme is saved when the page reloads
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}