function renderClock() {
    const timeDisplay = document.getElementById('time-display');
    const time = new Date;
    const minute = leadingZero(time.getMinutes());
    const seconds = leadingZero(time.getSeconds());    
    const hour = leadingZero(time.getHours());
    const isAm = hour < 12 || hour === 0;
    let amPm = isAm ? 'AM' : 'PM';
    
    timeDisplay.textContent = `${formatHour(hour)}:${minute}:${seconds} ${amPm}`;
    
}

function formatHour(hour) {
    hour = hour >= 13 ? hour - 12 : hour;
    hour = hour === 0 ? hour + 12 : hour;
    return hour;
}

function leadingZero(number) {
    return number < 10 ? '0' + number : number;
}

function renderDate() {
    const dateDisplay = document.getElementById('date-display');
    const today = new Date;
    const weekday = daysIndex[today.getDay()];
    const month = monthsIndex[today.getMonth()];
    const date = dateWithSuffix(today.getDate());
    const year = today.getFullYear();

    dateDisplay.textContent = `${weekday}, ${month} ${date }, ${year}`;

}


const daysIndex = ["Sunday", "Monday", "Tuesday", "Wednesday",
                            "Thursday", "Friday", "Saturday"];
        

const monthsIndex = ["January", "February", "March", "April", "May", "June", "July",
                            "August", "September", "October", "November", "December"];
        
renderClock();
renderDate();
setInterval(() => {
    renderClock();
    renderDate(); 
}, 1000);
       





    






