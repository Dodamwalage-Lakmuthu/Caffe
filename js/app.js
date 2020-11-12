const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click',()=>{
            //toglre nav
    nav.classList.toggle('navactive');
    //animate nav
    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation = `navlinkfade 0.5s ease-in forwards ${index/5}s`;
        }
    });
    //burger snimation
    burger.classList.toggle('toggle')
    });
    
     
}

navSlide();


const slidecontainer = document.querySelector('.slides');
const slideimages = document.querySelectorAll('.slides img');

const prevbtn = document.querySelector('#prevBtn');
const nextbtn = document.querySelector('#nextBtn');

let counter =1;
const width1 = slideimages[0].clientWidth;
console.log(width1);


nextbtn.addEventListener('click',()=>{
    slidecontainer.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slidecontainer.style.transform = 'translateX('+(-width1 * counter)+'px)';
});

prevbtn.addEventListener('click',()=>{
    slidecontainer.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slidecontainer.style.transform = 'translateX(' + (-width1 * counter)+'px)';
});
