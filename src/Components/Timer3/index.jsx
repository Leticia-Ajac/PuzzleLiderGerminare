import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import telaAzul from '../../Assets/ERROR.gif' 
import './style.css'

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
    const navegate = useNavigate()
    return (
        <div style={{position:'absolute', width:'1300px', height:'600px', backgroundColor:'#000', display:'flex', alignContent:'center'}} >
            <img src={telaAzul} alt="ERROR" style={{margin:'auto', width:'800px'}} />
            <Link
                style={{color:'#fff', width:'200px', height:'70px', margin:'0 0 0 -200px'}}
                onClick={navegate}
                to='/DefaultSecretPassword'
            ></Link>
        </div>
        );
    };

    const DateTimeDisplay = ({ value, type, isDanger }) => {
        return (
            <div className={isDanger ? 'countdown danger ' : 'countdown'}>
                <p>{value}</p>
                <span>{type}</span>
            </div>
            );
        };

    const ShowCounter = ({ minutes, seconds }) => {
        return (
            <div className="clockBox">
                <a className="countdown-link" style={{marginTop:'-15px'}}>
                <DateTimeDisplay value={minutes} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} isDanger={false} />
                </a>
            </div>
        );
    };

export { useCountdown, ExpiredNotice, ShowCounter };