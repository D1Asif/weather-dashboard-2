import { useContext, useEffect, useState } from "react"
import HeartIcon from "../../assets/heart.svg"
import RedHeartIcon from "../../assets/heart-red.svg"
import { FavoriteContext, WeatherContext } from "../../contexts";

export default function ToggleFavorite() {
    const [isFavorite, setIsFavorite] = useState(false);
    const { favoriteLocations, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { location, latitude, longitude } = weatherData;

    useEffect(() => {
        const found = favoriteLocations.find((fav) => fav.location === location);
        setIsFavorite(found);
    }, [favoriteLocations, location])



    function onToggleFavorite() {
        if (isFavorite) {
            removeFromFavorites(location)
        } else {
            addToFavorites(latitude, longitude, location)
        }
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                    onClick={onToggleFavorite}
                >
                    <span>Add to Favorite</span>
                    <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
                </button>

            </div>
        </div>
    )
}
