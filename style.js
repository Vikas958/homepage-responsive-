const mobNav = document.getElementById('Navmob');
const hamopen= document.getElementById('menuopen');
const hamclose = document.getElementById('menuclose');
hamopen.addEventListener('click',()=>{
    mobNav.classList.toggle('none');
})
hamclose.addEventListener('click',()=>{
    mobNav.classList.toggle('none');
})
