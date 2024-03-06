import { useState } from "react";

const useCountdown = (date) => {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [secund, setSecund] = useState();

    const countdown = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();

        const interval = countDate - now;

        const secund = 1000;
        const minute = secund * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day);
        const hourNumber = Math.floor((interval % day) / hour);
        const minuteNumber = Math.floor((interval % hour) / minute);
        const secondNumber = Math.floor((interval % minute) / secund);
    };


    setInterval(countdown, 1000);


    return 1;

}

export default useCountdown;