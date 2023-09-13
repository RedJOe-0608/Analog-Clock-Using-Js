
setInterval(setClock,1000)

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')


function setClock()
{
    const currentDate = new Date();
    let secondsRatio = currentDate.getSeconds()/60; // a number between 0 and 1

    //We have added in the seconds ratio because we do not want the minute hand to jump to the next minute only after the passage of 60s, but rather move grdually.
    let minutesRatio =  (secondsRatio +  currentDate.getMinutes())/60; // a number between 0 and 1

    //Here, if we don't add the minutes ratio, then the hour hand would directly jump from 5 to 6 after the passage of one hour without slowly and gradually moving.
    let hoursRatio = (minutesRatio + currentDate.getHours())/12; // a number between 0 and 1



    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio*360)
}

setClock()  