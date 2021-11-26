const date_now = document.getElementById("date_now")


setInterval(local_time,1000)
function local_time(){
    const new_date = new Date()
    date_now.innerHTML = new_date.toLocaleTimeString()
}
