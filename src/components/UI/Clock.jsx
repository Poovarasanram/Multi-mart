import React, { useState, useEffect } from 'react';
import '../../Style/Clock.css';

const Clock = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-24") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);  // Add an empty dependency array to run useEffect only once

    const addLeadingZero = value => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div className="clock_wrapper d-flex align-items-center">
            <div className="clock_data d-flex align-items-center">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{addLeadingZero(timeLeft.days)}</h1>
                    <h5 className='text-white fs-6'>Days</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock_data d-flex align-items-center">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{addLeadingZero(timeLeft.hours)}</h1>
                    <h5 className='text-white fs-6'>Hours</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock_data d-flex align-items-center">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{addLeadingZero(timeLeft.minutes)}</h1>
                    <h5 className='text-white fs-6'>Minutes</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>

            <div className="clock_data d-flex align-items-center">
                <div className='text-center'>
                    <h1 className='text-white fs-3 mb-2'>{addLeadingZero(timeLeft.seconds)}</h1>
                    <h5 className='text-white fs-6'>Seconds</h5>
                </div>
            </div>
        </div>
    );
};

export default Clock;
