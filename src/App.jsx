import './App.css'
import Page from './Page'

import { FavoritesProvider, LocationProvider, WeatherDataProvider } from './provider'

function App() {

  return (
    <LocationProvider>
      <FavoritesProvider>
        <WeatherDataProvider>
          <Page />
        </WeatherDataProvider>
      </FavoritesProvider>
    </LocationProvider>
  )
}

export default App;
