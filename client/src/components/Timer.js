import React, { useState, useEffect } from 'react';

const useTimer = (interval) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const token = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, interval);
        return () => {
            clearInterval(token);
        }
    }, []);
    return count;
}

export default useTimer;