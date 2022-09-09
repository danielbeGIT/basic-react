import React from 'react'
import { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(() => {
		return new Date().toLocaleTimeString('en-GB')
	})

    // This will be executed when the component is mounted,
	// and only AFTER the component has been rendered
	useEffect(() => {
        console.log("Clock is mounted, timer starting..")

		const intervalId = setInterval(() => {
			// update time
			const currentTime = new Date().toLocaleTimeString('en-GB')
	
			console.log("Current time:", currentTime)

			setTime(currentTime)
		}, 1000)

        return () => {
            // This function will be exceuted when the component is about to be unmounted

            console.log("Clock is being unmounted, stopping timer..")

            clearInterval(intervalId)
        }
	}, [])

    return (
        <div className="display-1 text-center">
			{time}
		</div>
    )
}

export default Clock