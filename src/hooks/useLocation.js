import { useState } from "react"

const useLocation = () => {
    const [location, setLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0
    });

    return [location, setLocation];
}

export default useLocation;