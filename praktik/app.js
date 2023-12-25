// Initialize time
let time = {
    hour: 12,
    min: 0,
    sek: 0
};


function updateTime() {
    
    time.sek++;

    if (time.sek === 60) {
        time.sek = 0;
        time.min++;
    }

    if (time.min === 60) {
        time.min = 0;
        time.hour = (time.hour + 1) % 12;
    }
    // if (time.hour ===24){
    //     time.hour = 0;
    //     time
    // }

  
    document.querySelector('.hour').textContent = String(time.hour).padStart(2, '0');
    document.querySelector('.min').textContent = String(time.min).padStart(2, '0');
    document.querySelector('.sek').textContent = String(time.sek).padStart(2, '0');
}


setInterval(updateTime, 1000);