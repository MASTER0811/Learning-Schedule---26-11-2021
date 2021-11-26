let outer_load = document.querySelector(".reload_outer");
let loader = document.querySelector('.reload_inner');
let width = 0


window.onload = () =>{
    width += 100;
    loader.style.width = width + "%";

    if(width == 100){
        setInterval(function(){
            outer_load.style.opacity = 0
        },500)
    }
}