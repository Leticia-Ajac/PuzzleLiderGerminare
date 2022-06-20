import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
        );
    };

    const DateTimeDisplay = ({ value, type, isDanger }) => {
        return (
            <div className={isDanger ? 'countdown danger' : 'countdown'}>
                <p>{value}</p>
                <span>{type}</span>
            </div>
            );
        };

    const ShowCounter = ({ minutes, seconds }) => {
        return (
            <div className="show-counter">
                <a className="countdown-link">
                <DateTimeDisplay value={minutes} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} isDanger={false} />
                </a>
            </div>
        );
    };



export { useCountdown, ExpiredNotice, ShowCounter };