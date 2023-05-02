const btn = document.getElementById("baku1")
const btn2 = document.getElementById("salam")
const btn3 = document.getElementById("sagol")
const baku = document.getElementById("baku")
const salam = document.getElementById("slm")
const sagol = document.getElementById("sgl")
const gor = baku.classList; 
const slm = salam.classList;
const sagl = sagol.classList
function words() {
    gor.remove("Baku")
    sagl.add("Sagol")
    slm.add("Salam")
}
function words2() {
    slm.remove("Salam")
    gor.add("Baku")
    sagl.add("Sagol")
}
function words3() {
    sagl.remove("Sagol")
    slm.add("Salam")
    gor.add("Baku")
}
