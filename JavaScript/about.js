let img_box = document.querySelector(".img_box")
let img_text = document.querySelector(".about_text")
let about_list_img = ["./Images/about/jb_foonyew_full.jpg","./Images/about/kulai_full.jpg","./Images/about/seri-alarm_full.jpg"]
let about_list_text = ["Jb Foonyew High School","Kulai Foonyew High School","Seri Alarm Foonyew High School"]



let spanbtn_0 = document.querySelector(".spanbtn_0")
let spanbtn_1 = document.querySelector(".spanbtn_1")
let spanbtn_2 = document.querySelector(".spanbtn_2")

function dpy_block(){
    img_text.style.display = "block";
}

spanbtn_0.onclick = () =>{
    spanbtn_0.classList.add("active")
    spanbtn_1.classList.remove("active")
    spanbtn_2.classList.remove("active")
    img_box.src = about_list_img[0]
    img_text.innerHTML = about_list_text[0]
    dpy_block()
}
spanbtn_1.onclick = () =>{
    spanbtn_1.classList.add("active")
    spanbtn_2.classList.remove("active")
    spanbtn_0.classList.remove("active")
    img_box.src = about_list_img[1]
    img_text.innerHTML = about_list_text[1]
    dpy_block()
}
spanbtn_2.onclick = () =>{
    spanbtn_2.classList.add("active")
    spanbtn_1.classList.remove("active")
    spanbtn_0.classList.remove("active")
    img_box.src = about_list_img[2]
    img_text.innerHTML = about_list_text[2]
    dpy_block()
}