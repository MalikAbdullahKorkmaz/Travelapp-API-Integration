import { useState } from 'react'
import { MapPin, Hotel, Map, Globe } from 'lucide-react'
import HotelSearch from './pages/HotelSearch'
import DestinationExplore from './pages/DestinationExplore'
import './App.css'

type Tab = 'hotels' | 'destinations'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('hotels')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Globe className="logo-icon" />
            <h1>TravelGo</h1>
          </div>
          <p className="tagline">Explore Hotels & Destinations Worldwide</p>
        </div>
      </header>

      <nav className="nav-tabs">
        <button
          className={`tab-button ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          <Hotel size={20} />
          Find Hotels
        </button>
        <button
          className={`tab-button ${activeTab === 'destinations' ? 'active' : ''}`}
          onClick={() => setActiveTab('destinations')}
        >
          <Map size={20} />
          Explore Destinations
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'hotels' && <HotelSearch />}
        {activeTab === 'destinations' && <DestinationExplore />}
      </main>
    </div>
  )
}

export default App
