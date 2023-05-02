const hourse = document.getElementById("hourse")
const minute = document.getElementById("minute")
const btn = document.querySelector("button")
let h = 0
let m = 0
function watch() {
    m++
    if (m==60) {
        m=0
        h++
    }
    hourse.innerHTML = h ;
    minute.innerHTML = m ;
}
setInterval(watch,1000);
