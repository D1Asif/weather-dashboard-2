/* eslint-disable react/prop-types */
import { FavoriteContext } from "../contexts"
import { useLocalStorage } from "../hooks";


export default function FavoritesProvider({children}) {
    const [favoriteLocations, setFavoriteLocations] = useLocalStorage("Favorites", [])

    const addToFavorites = (latitude, longitude, location) => {
        console.log(latitude, longitude, location);
        setFavoriteLocations([
            ...favoriteLocations,
            {
                latitude,
                longitude,
                location
            }
        ])
    }

    const removeFromFavorites = (location) => {
        const updatedFavoriteLocations = favoriteLocations.filter((fav) => fav.location !== location)
        setFavoriteLocations(updatedFavoriteLocations);
    }
    return (
        <FavoriteContext.Provider value={{favoriteLocations, addToFavorites, removeFromFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}
