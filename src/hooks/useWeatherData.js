import { useState, useEffect, useContext } from "react";
import { LocationContext } from "../contexts";

const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        latitude: "",
        longitude: "",
        temperature: "",
        maximumTemperature: "",
        minimumTemperature: "",
        humidity: "",
        clouds: "",
        wind: "",
        weather: "",
        time: ""
    });

    const [isLoading, setIsLoading] = useState({
        state: false,
        message: ""
    });

    const [error, setError] = useState(null);

    const {location} = useContext(LocationContext);

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setIsLoading({
                state: true,
                message: "fetching data..."
            })

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);

            if (!response.ok) {
                throw new Error(`${response.status} Error fetching data`);
            }

            const data = await response.json();

            const dataToUpdate = {
                ...weatherData,
                location: data?.name,
                latitude: data?.coord?.lat,
                longitude: data?.coord?.lon,
                temperature: data?.main?.temp,
                maximumTemperature: data?.main?.temp_max,
                minimumTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                clouds: data?.clouds?.all,
                wind: data?.wind?.speed,
                weather: data?.weather[0]?.main,
                time: data?.dt
            }
            setWeatherData(dataToUpdate);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading({
                state: false,
                message: ""
            })
        }
    }

    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetchWeatherData(location.latitude, location.longitude)
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            })
        }
    }, [location.latitude, location.longitude]);

    return {
        weatherData,
        isLoading,
        error
    }
}

export default useWeatherData;