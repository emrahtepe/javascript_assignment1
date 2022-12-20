let myName = document.getElementById("myName");
let myClock = document.getElementById("myClock");
let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let retVal = prompt("Adınız nedir?");
myName.innerHTML = retVal;

showTime();

function showTime() {
    let date = new Date();
    myClock.innerHTML = ((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + ":" +
                        ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()) + ":" +
                        ((date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()) + " " +
                        days[date.getDay()];
}

setInterval(function () {
    showTime();
}, 1000);