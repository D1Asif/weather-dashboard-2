import { useContext } from 'react'
import Header from './components/header/Header'
import WeatherBoard from './components/weather/WeatherBoard'
import { WeatherContext } from './contexts'

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
    const { weatherData, isLoading } = useContext(WeatherContext)

    function getBackgroundImage(weather) {
        switch (weather) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatteredCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    const backgroundImage = getBackgroundImage(weatherData.weather);

    return (
        <>
            {
                isLoading.state ? (
                    <div className='flex justify-center items-center h-screen m-auto'>
                        <p className='text-xl rounded-md bg-gray-200 px-5 py-2'>
                            {isLoading.message}
                        </p>
                    </div>
                ) : (
                    <div
                        className="text-light h-screen grid place-items-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                    >
                        <Header />
                        <section>
                            <div className='container'>
                                <WeatherBoard />
                            </div>
                        </section>
                    </div>
                )
            }
        </>

    )
}
