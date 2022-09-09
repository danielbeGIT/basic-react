import React, { useState } from 'react'

const Timer = () => {
    const [timerId, setTimerId] = useState()
    const [timeElapsed, setTimeElapsed] = useState(0)

    const startTimer = () => {
        const intervalId = setInterval(() => {
            setTimeElapsed(prevTimeElapsed => prevTimeElapsed + 1)
        }, 1);

        setTimerId(intervalId)
    }

    const stopTimer = () => {
        clearInterval(timerId)
        setTimerId(null)
    }

    const resetTimer = () => {
        setTimeElapsed(0)
    }

    const seconds = Math.floor(timeElapsed / 10).toString().padStart(2, 0)
    // const tenths = (timeElapsed % 10).toString().padStart(2, 0)
    const hundreths = (timeElapsed % 100).toString().padStart(2, 0)
    // const minutes = Math.floor(timeElapsed / 100 / 60).toString().padStart(2, 0)

    return (
		<div className="display-1 text-center">
			<div className="time-elapsed">
				<pre>{seconds}:{hundreths}</pre>
			</div>

			<div className="btn-group" role="group">

				<button 
                    onClick={startTimer} 
                    disabled={timerId}
                    className="btn btn-success">
                        Start
                </button>

				<button 
                    onClick={stopTimer}
                    disabled={!timerId}
                    className="btn btn-warning">
                        Stop
                </button>

				<button 
                    onClick={resetTimer} 
                    className="btn btn-danger">
                        Reset
                </button>

			</div>
		</div>
	)
}

export default Timer