import React, { useRef, useState } from "react";

const Dashboard = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "minutes") {
            setMinutes(value);
        } else {
            setSeconds(value);
        }
    };
    const resetHandler = () => {
        clearInterval(intervalRef.current);
        setMinutes(0);
        setSeconds(0);
        setTotalMinutes(0);
        setTotalSeconds(0);
    };
    const startHandler = () => {
        const time = Number(Number(minutes) * 60 + Number(seconds));
        let minute = Math.floor(time / 60);
        let second = time - minute * 60;
        console.log("time: " + time + " seconds: " + second + "minutes: " + minute);
        if (minute < 10) {
            minute = `0${minute}`;
        }
        if (second < 10) {
            second = `0${second}`;
        }
        setTotalMinutes(minute);
        setTotalSeconds(second);
        if (minute > 0 && second > 0) {
            run(minute, second);
        }

    };

    const run = (minute, second) => {
        let sec = second;
        let min = minute;
        console.log("inside", totalMinutes, totalSeconds, sec, min);
        intervalRef.current = setInterval(() => {
            if (sec === 0) {
                if (min > 0) {
                    if (min < 10) {
                        setTotalMinutes((totalMinutes) => `0${totalMinutes - 1}`);
                    } else {
                        setTotalMinutes((totalMinutes) => totalMinutes - 1);
                    }
                    --min;

                    setTotalSeconds(59);
                    sec = 59;
                }
                else {
                    return
                }
            } else {
                if (sec < 10) {
                    setTotalSeconds((totalSeconds) => `0${totalSeconds - 1}`);
                } else {
                    setTotalSeconds((totalSeconds) => totalSeconds - 1);
                }

                --sec;
            }
        }, 1000);
    };

    const pauseHandler = () => {
        setPause((pause) => !pause);
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            run();
        }
    };

    return (
        <div className="saru">
            <div>
                <label>Minutes</label>
                <input
                    type="number"
                    name="minutes"
                    value={minutes}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Seconds</label>
                <input
                    type="number"
                    name="seconds"
                    value={seconds}
                    onChange={handleInputChange}
                />
            </div>
            <div className="sushu">
                <button onClick={startHandler}>start</button>
                <button onClick={pauseHandler}>{!pause ? "pause" : "resume"}</button>
                <button onClick={resetHandler}>reset</button>
            </div>
            <h1>{`${totalMinutes}:${totalSeconds}`}</h1>
        </div>
    );
};

export default Dashboard;
