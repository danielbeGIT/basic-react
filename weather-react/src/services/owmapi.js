/**
 * Open Weather Map API
 */

import axios from 'axios'

const API_KEY = "db9377535f2b7f2aa774583a76bf817d"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

/**
 * Get current weather for a city.
 * USING AXIOS
 *
 * @param {string} query City to get current weather for
 */
const getCurrentWeather = async query => {
    try {
        const response = await axios.get(`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`)

        return response.data
    } catch (err) {
        /*
        // For "custom message"
        if (err.statusCode === 404) {
            return {
                message: "Could not find city"
            }
        }
        */
        return {
            message: err.message
        }
    }
}


/**
 * Get current weather for a city.
 * USING FETCH
 *
 * @param {string} query City to get current weather for
 */
const getCurrentWeatherFetch = async query => {
    // get weather for query from OpenWeatherMap API
    const response = await fetch(`${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`)

    // convert response from JSON
    const data = await response.json()

    // fake slow api
    // await new Promise(r => setTimeout(r, 1500))

    // return current weather
    return data
}

export {
    getCurrentWeather,
}