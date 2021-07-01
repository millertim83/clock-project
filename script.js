
const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');

function tickingClock() {
    const today = new Date;
    const minute = leadingZero(today.getMinutes());
    const seconds = leadingZero(today.getSeconds());    
    const militaryTime = today.getHours();
    const standardTime =  get12HourTime(militaryTime);
    const hour = leadingZero(standardTime);

    const weekday = daysIndex[today.getDay()];
    const month = monthsIndex[today.getMonth()];
    const date = dateWithSuffix(today.getDate());
    const year = today.getFullYear();
    
    timeDisplay.textContent = (hour + ":" + minute + ":" + seconds + " " + (militaryTime >= 12 ? 'PM' : 'AM'));
    dateDisplay.textContent = (weekday + ", " + month + " " + date + ", " + year);

}

function leadingZero(time) {
    if (time < 10) {
        return ("0" + time);
    } else return time;
}

function get12HourTime(militaryTime) {
    if (militaryTime === 0) {
        return 12;
    } else if (militaryTime > 12) {
        return (militaryTime - 12)
    } else return militaryTime;
}

const daysIndex = ["Sunday", "Monday", "Tuesday", "Wednesday",
                            "Thursday,", "Friday", "Saturday"];
        

const monthsIndex = ["January", "February", "March", "April", "May", "June", "July",
                            "August", "September", "October", "November", "December"];
        
            
function dateWithSuffix(date) {
        if (date == 1 || date == 21 || date == 31) {
            return dayOfMonth + "st";
        } else if (date == 2 || date == 22) {
            return dayOfMonth + "nd";
        } else if (date == 3 || date == 23) {
            return date + "rd";
        } else return date + "th";
}
 
tickingClock();
setInterval(tickingClock, 1000);





    






