/* eslint-disable react/prop-types */
import { LocationContext } from "../contexts";
import { useLocation } from "../hooks"


export default function LocationProvider({children}) {
    const [location, setLocation] = useLocation();
  return (
    <LocationContext.Provider value={{location, setLocation}}>
        {children}
    </LocationContext.Provider>
  )
}
