function openMenu(){
    document.getElementById('navbar').classList.add('active-nav');
    document.getElementById("menu-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}

function closeMenu(){
    document.getElementById('navbar').classList.remove('active-nav');
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("menu-btn").style.display = "block";
}
const card = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("anima",entry.isIntersecting)
    });
});
card.forEach(entry =>{
    observer.observe(entry);
})
window.addEventListener('resize', reSizer)
reSizer();
function reSizer(){
    let size = document.getElementById('box-size').offsetWidth;
    size = size - 20;
    const box_no = document.getElementsByClassName('frame');
    for(i = 0;i < box_no.length;i++){
        box_no[i].style.width = size+'px';
    }    
}

const lines = document.querySelectorAll('.slide');
const obs = new IntersectionObserver(enteries =>{
    enteries.forEach(entry =>{
        entry.target.classList.toggle("slide-bg",entry.isIntersecting)
    })
})
lines.forEach(entery =>{
    obs.observe(entery);
})


const txt = document.querySelector('.descr-myself');
const book = document.querySelector('.studydp');
const about = document.querySelector('#about');
const obser = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            txt.classList.add("sliding-text");
            book.classList.add("light");
        }
        else{
            txt.classList.remove("sliding-text");
            book.classList.remove("light");
        }
    })
})
obser.observe(about);

const boxtxt = document.querySelector('.thinking-sect');
const ob = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            boxtxt.classList.add('blink')
        }
        else{
            boxtxt.classList.remove('blink')
        }
    })
})
ob.observe(boxtxt);

const zoomtxt = document.querySelectorAll('.quote .abc');
const ctn = document.querySelector('#quote');
const zoomObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        for(let i=0;i<zoomtxt.length;i++){
            setTimeout(() => {
                zoomtxt[i].classList.toggle('opacit',entry.isIntersecting);
            }, i*105);
            zoomtxt[i].classList.toggle('zoomin',entry.isIntersecting);
        }
    })
})

zoomObs.observe(ctn);
