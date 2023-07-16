const navbar=document.querySelector("nav");
const openMenu=document.getElementById("menubtn");
const closeMenu=document.getElementById("menuclose");

openMenu.addEventListener("click", () =>{
    navbar.classList.add("open");
}
);
openMenu.addEventListener("click", () =>{
    navbar.classList.remove("open");
}
);