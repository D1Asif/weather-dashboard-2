/* eslint-disable react/prop-types */
import { WeatherContext } from "../contexts";
import { useWeatherData } from "../hooks"

export default function WeatherDataProvider({ children }) {
    const {weatherData, isLoading, error} = useWeatherData();
    
    return (
        <WeatherContext.Provider value={{weatherData, isLoading, error}}>
            {children}
        </WeatherContext.Provider>
    )
}
