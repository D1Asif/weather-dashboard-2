import { useContext, useState } from "react"
import SearchIcon from "../../assets/search.svg"
import { LocationContext } from "../../contexts";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {setLocation} = useContext(LocationContext)

    const getGeoCodedLocation = async (locationName) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://geocode.maps.co/search?q=${locationName}&api_key=${import.meta.env.VITE_GEOCODING_API}`)

            if (!response.ok) {
                throw new Error(`${response.status} Error occurred while fetching`)
            }

            const data = await response.json();

            return {
                location: locationName,
                latitude: data[0]?.lat,
                longitude: data[0]?.lon
            }
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const locationToSet = await getGeoCodedLocation(searchTerm);
        if (locationToSet.latitude  && locationToSet.longitude ) {
            setLocation(locationToSet);
        } else {
            setError("Invalid location");
        }
        
    }

    return (
        <form 
            action="#"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input 
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setError(null)
                    }}
                />
                <button type="submit">
                    <img src={SearchIcon} />
                </button>
            </div>
            {isLoading && <p>Fetching search result</p>}
            {error && <p className="text-red-500">{error}</p>}
        </form>
    )
}
