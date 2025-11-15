import { useState, useEffect } from 'react'
import { Hotel, MapPin, Star, Search, Users, Calendar } from 'lucide-react'
import '../styles/pages.css'

interface HotelData {
  id: string
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  amenities: string[]
}

export default function HotelSearch() {
  const [hotels, setHotels] = useState<HotelData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('New York')
  const [searchInput, setSearchInput] = useState('')

  const mockHotels: Record<string, HotelData[]> = {
    'New York': [
      {
        id: '1',
        name: 'The Plaza Hotel',
        location: 'Fifth Avenue, Manhattan',
        price: 395,
        rating: 4.8,
        reviews: 2543,
        image: '🏨',
        amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant'],
      },
      {
        id: '2',
        name: 'The St. Regis',
        location: 'Midtown Manhattan',
        price: 550,
        rating: 4.9,
        reviews: 1876,
        image: '🏰',
        amenities: ['WiFi', 'Spa', 'Concierge', 'Fine Dining'],
      },
      {
        id: '3',
        name: 'The Peninsula',
        location: 'Fifth Avenue',
        price: 475,
        rating: 4.7,
        reviews: 2104,
        image: '🏛️',
        amenities: ['WiFi', 'Rooftop Bar', 'Gym', 'Restaurant'],
      },
    ],
    'Paris': [
      {
        id: '4',
        name: 'Ritz Paris',
        location: 'Place Vendôme',
        price: 520,
        rating: 4.9,
        reviews: 3421,
        image: '✨',
        amenities: ['WiFi', 'Spa', 'Michelin Restaurant', 'Concierge'],
      },
      {
        id: '5',
        name: 'Le Meurice',
        location: 'Rue de Rivoli',
        price: 480,
        rating: 4.8,
        reviews: 2876,
        image: '🏨',
        amenities: ['WiFi', 'Restaurant', 'Bar', 'Gym'],
      },
      {
        id: '6',
        name: 'Hotel de Crillon',
        location: 'Place de la Concorde',
        price: 450,
        rating: 4.7,
        reviews: 2345,
        image: '🏰',
        amenities: ['WiFi', 'Spa', 'Restaurant', 'Bar'],
      },
    ],
    'Tokyo': [
      {
        id: '7',
        name: 'The Peninsula Tokyo',
        location: 'Ginza',
        price: 380,
        rating: 4.8,
        reviews: 1987,
        image: '🏨',
        amenities: ['WiFi', 'Spa', 'Restaurant', 'Gym'],
      },
      {
        id: '8',
        name: 'Mandarin Oriental Tokyo',
        location: 'Nihonbashi',
        price: 420,
        rating: 4.9,
        reviews: 2234,
        image: '✨',
        amenities: ['WiFi', 'Spa', 'Fine Dining', 'Bar'],
      },
      {
        id: '9',
        name: 'Four Seasons Tokyo',
        location: 'Marunouchi',
        price: 400,
        rating: 4.8,
        reviews: 2012,
        image: '🏰',
        amenities: ['WiFi', 'Pool', 'Restaurant', 'Gym'],
      },
    ],
  }

  const fetchHotels = async (cityName: string) => {
    setLoading(true)
    setError('')
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const hotelList = mockHotels[cityName]
      if (!hotelList) {
        throw new Error('City not found')
      }
      setHotels(hotelList)
    } catch (err) {
      setError('Failed to fetch hotels. Please try another city.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHotels(city)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      setCity(searchInput)
      fetchHotels(searchInput)
      setSearchInput('')
    }
  }

  return (
    <div className="page-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city (e.g., New York, Paris, Tokyo)..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          <Search size={20} />
          Search
        </button>
      </form>

      {loading && (
        <div className="loading-container">
          <div className="spinner">⟳</div>
          <p>Finding hotels...</p>
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {hotels.length > 0 && !loading && (
        <div>
          <h2 className="results-title">Hotels in {city}</h2>
          <div className="hotels-grid">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image">{hotel.image}</div>
                <h3 className="hotel-name">{hotel.name}</h3>
                <p className="hotel-location">
                  <MapPin size={16} />
                  {hotel.location}
                </p>

                <div className="hotel-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(hotel.rating) ? '#fbbf24' : 'none'}
                        color={i < Math.floor(hotel.rating) ? '#fbbf24' : 'rgba(255,255,255,0.3)'}
                      />
                    ))}
                  </div>
                  <span className="rating-value">{hotel.rating}</span>
                  <span className="reviews">({hotel.reviews} reviews)</span>
                </div>

                <div className="amenities">
                  {hotel.amenities.map((amenity, idx) => (
                    <span key={idx} className="amenity-tag">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="hotel-footer">
                  <div className="price">
                    <span className="price-label">From</span>
                    <span className="price-value">${hotel.price}</span>
                    <span className="price-unit">/night</span>
                  </div>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
