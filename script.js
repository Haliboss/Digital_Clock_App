const date = document.querySelector(".date")
const time = document.querySelector(".time")
const gun = document.querySelector(".gun")


const digitalClock = () => {
    
    let now = new Date()
    
    let yil = now.toLocaleDateString().split("/")[0]
    date.innerHTML = say(yil)

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    gun.innerHTML = gunler[now.getDay()];

    time.innerHTML = say(now.toLocaleTimeString());
    setInterval(digitalClock, 1000)
}

const say =  (x) =>{
    if(x < 10){
        x = "0" + x;
    }
    return x; 
} 

digitalClock()

