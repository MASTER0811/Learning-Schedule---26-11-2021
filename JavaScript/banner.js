let heartbtn = document.querySelector(".fa-heart")
let btndark = document.querySelector(".fa-moon");
let btnlight = document.querySelector(".fa-sun");
let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector(".fa-bars");

heartbtn.onclick = function(){
    heartbtn.classList.toggle("active")
}


btndark.onclick = function(){
    document.body.classList.toggle("dark_mode")
    btndark.style.display = "none";
    btnlight.style.display = "block"
}

btnlight.onclick = function(){
    document.body.classList.toggle("dark_mode");
    btndark.style.display = "block";
    btnlight.style.display = "none";
}


let section = document.querySelectorAll("section")
let li_link = document.querySelectorAll(".navbar ul li a")
window.onscroll = () =>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
        li_link.forEach(li_linka =>{
            li_linka.classList.remove('active');
            document.querySelector('.navbar ul li a[href*='+id+']').classList.add('active');
        });
        };
    });
}



menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}