let sun = document.querySelector(".sun")
let mon = document.querySelector(".mon")
let tue = document.querySelector(".tue")
let wed = document.querySelector(".wed")
let thu = document.querySelector(".thu")
let fri = document.querySelector(".fri")
let sat = document.querySelector(".sat")

let d = new Date()
let day = d.getDay()    

if(day == 0){
    sun.style.display = "block";
    mon.style.display = "none";
    tue.style.display = "none";
    wed.style.display = "none";
    thu.style.display = "none";
    fri.style.display = "none";
    sat.style.display = "none";
}
if(day == 1){
    sun.style.display = "none";
    mon.style.display = "block";
    tue.style.display = "none";
    wed.style.display = "none";
    thu.style.display = "none";
    fri.style.display = "none";
    sat.style.display = "none";
}
if(day == 2){
    sun.style.display = "none";
    mon.style.display = "none";
    tue.style.display = "block";
    wed.style.display = "none";
    thu.style.display = "none";
    fri.style.display = "none";
    sat.style.display = "none";
}
if(day == 3){
    sun.style.display = "none";
    mon.style.display = "none";
    tue.style.display = "none";
    wed.style.display = "block";
    thu.style.display = "none";
    fri.style.display = "none";
    sat.style.display = "none";
}
if(day == 4){
    sun.style.display = "none";
    mon.style.display = "none";
    tue.style.display = "none";
    wed.style.display = "none";
    thu.style.display = "block";
    fri.style.display = "none";
    sat.style.display = "none";
}
if(day == 5){
    sun.style.display = "none";
    mon.style.display = "none";
    tue.style.display = "none";
    wed.style.display = "none";
    thu.style.display = "none";
    fri.style.display = "block";
    sat.style.display = "none";
}
if(day == 6){
    sun.style.display = "none";
    mon.style.display = "none";
    tue.style.display = "none";
    wed.style.display = "none";
    thu.style.display = "none";
    fri.style.display = "none";
    sat.style.display = "block";
}

let close_con = document.querySelector(".close_con")
let xue_shu =document.querySelector(".xue_shu")
let zhi_fu = document.querySelector(".zhi_fu")
let biao_yan = document.querySelector(".biao_yan")
let xue_yi = document.querySelector(".xue_yi")
let fu_wu = document.querySelector(".fu_wu")
let ti_yu = document.querySelector(".ti_yu")
let l_one = document.querySelector(".l_one")
let l_two = document.querySelector(".l_two")
let l_three = document.querySelector(".l_three")
let l_four = document.querySelector(".l_four")
let l_five = document.querySelector(".l_five")
let l_six = document.querySelector(".l_six")
let list_box = document.getElementsByClassName(".list_box")

let l_1 = document.querySelector(".l_1")
let l_2 = document.querySelector(".l_2")
let l_3 = document.querySelector(".l_3")
let l_4 = document.querySelector(".l_4")
let l_5 = document.querySelector(".l_5")
let l_6 = document.querySelector(".l_6")

close_con.onclick = function(){
    l_one.classList.remove("active")
    l_two.classList.remove("active")
    l_three.classList.remove("active")
    l_four.classList.remove("active")
    l_five.classList.remove("active")
    l_six.classList.remove("active")
    xue_shu.style.display = "block"
    zhi_fu.style.display = "block"
    biao_yan.style.display = "block"
    xue_yi.style.display = "block"
    fu_wu.style.display = "block"
    ti_yu.style.display = "block"
    close_con.style.display = "none"
    l_1.style.display = "block"
    l_2.style.display = "block"
    l_3.style.display = "block"
    l_4.style.display = "block"
    l_5.style.display = "block"
    l_6.style.display = "block"
}


xue_shu.onclick = function(){
    l_one.classList.add("active")
    xue_shu.style.display = "none"
    close_con.style.display = "block"
    l_2.style.display = "none"
    l_3.style.display = "none"
    l_4.style.display = "none"
    l_5.style.display = "none"
    l_6.style.display = "none"
}
zhi_fu.onclick = function(){
    l_two.classList.add("active")
    zhi_fu.style.display = "none"
    close_con.style.display = "block"
    l_1.style.display = "none"
    l_3.style.display = "none"
    l_4.style.display = "none"
    l_5.style.display = "none"
    l_6.style.display = "none"
}
biao_yan.onclick = function(){
    l_three.classList.add("active")
    biao_yan.style.display = "none"
    close_con.style.display = "block"
    l_1.style.display = "none"
    l_2.style.display = "none"
    l_4.style.display = "none"
    l_5.style.display = "none"
    l_6.style.display = "none"
}
xue_yi.onclick = function(){
    l_four.classList.add("active")
    xue_yi.style.display = "none"
    close_con.style.display = "block"
    l_1.style.display = "none"
    l_2.style.display = "none"
    l_3.style.display = "none"
    l_5.style.display = "none"
    l_6.style.display = "none"
}
fu_wu.onclick = function(){
    l_five.classList.add("active")
    fu_wu.style.display = "none"
    close_con.style.display = "block"
    l_1.style.display = "none"
    l_2.style.display = "none"
    l_3.style.display = "none"
    l_4.style.display = "none"
    l_6.style.display = "none"
}
ti_yu.onclick = function(){
    l_six.classList.add("active")
    ti_yu.style.display = "none"
    close_con.style.display = "block"
    l_1.style.display = "none"
    l_2.style.display = "none"
    l_3.style.display = "none"
    l_4.style.display = "none"
    l_5.style.display = "none"
}