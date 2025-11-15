import { useState } from 'react'
import { MapPin, Thermometer, Users, DollarSign, Calendar } from 'lucide-react'
import '../styles/pages.css'

interface Destination {
  id: string
  name: string
  country: string
  description: string
  image: string
  temperature: number
  bestTime: string
  budget: string
  attractions: string[]
  population: string
}

export default function DestinationExplore() {
  const [filter, setFilter] = useState('all')

  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Paris',
      country: 'France',
      description: 'The City of Light, known for romance, art, and iconic landmarks',
      image: '🗼',
      temperature: 15,
      bestTime: 'April - June',
      budget: '$$$',
      attractions: ['Eiffel Tower', 'Louvre', 'Notre-Dame'],
      population: '2.2M',
    },
    {
      id: '2',
      name: 'Tokyo',
      country: 'Japan',
      description: 'A vibrant metropolis blending ancient traditions with modern technology',
      image: '🗾',
      temperature: 18,
      bestTime: 'March - May',
      budget: '$$$',
      attractions: ['Senso-ji', 'Shibuya', 'Mount Fuji'],
      population: '37.4M',
    },
    {
      id: '3',
      name: 'Barcelona',
      country: 'Spain',
      description: 'Mediterranean charm with stunning architecture and beaches',
      image: '🏖️',
      temperature: 22,
      bestTime: 'May - September',
      budget: '$$',
      attractions: ['Sagrada Familia', 'Park Güell', 'Gothic Quarter'],
      population: '1.6M',
    },
    {
      id: '4',
      name: 'New York',
      country: 'USA',
      description: 'The city that never sleeps with world-class attractions and dining',
      image: '🗽',
      temperature: 12,
      bestTime: 'September - November',
      budget: '$$$',
      attractions: ['Statue of Liberty', 'Times Square', 'Central Park'],
      population: '8.3M',
    },
    {
      id: '5',
      name: 'Dubai',
      country: 'UAE',
      description: 'Luxury and modernity in the desert with stunning architecture',
      image: '🏙️',
      temperature: 38,
      bestTime: 'November - March',
      budget: '$$$',
      attractions: ['Burj Khalifa', 'Palm Jumeirah', 'Gold Souk'],
      population: '3.6M',
    },
    {
      id: '6',
      name: 'Bangkok',
      country: 'Thailand',
      description: 'Exotic temples, vibrant street life, and delicious cuisine',
      image: '🏯',
      temperature: 32,
      bestTime: 'November - February',
      budget: '$$',
      attractions: ['Grand Palace', 'Wat Pho', 'Floating Markets'],
      population: '10.1M',
    },
  ]

  const budgetOptions = ['all', '$', '$$', '$$$']

  const filteredDestinations =
    filter === 'all' ? destinations : destinations.filter((d) => d.budget === filter)

  return (
    <div className="page-container">
      <div className="filter-section">
        <label>Filter by Budget:</label>
        <div className="budget-filters">
          {budgetOptions.map((option) => (
            <button
              key={option}
              className={`filter-button ${filter === option ? 'active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option === 'all' ? 'All' : option}
            </button>
          ))}
        </div>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <div className="destination-image">{dest.image}</div>
            <h3 className="destination-name">{dest.name}</h3>
            <p className="destination-country">{dest.country}</p>
            <p className="destination-description">{dest.description}</p>

            <div className="destination-details">
              <div className="detail">
                <Thermometer size={16} />
                <span>{dest.temperature}°C</span>
              </div>
              <div className="detail">
                <Calendar size={16} />
                <span>{dest.bestTime}</span>
              </div>
              <div className="detail">
                <DollarSign size={16} />
                <span>{dest.budget}</span>
              </div>
              <div className="detail">
                <Users size={16} />
                <span>{dest.population}</span>
              </div>
            </div>

            <div className="attractions">
              <p className="attractions-label">Top Attractions:</p>
              <div className="attractions-list">
                {dest.attractions.map((attr, idx) => (
                  <span key={idx} className="attraction-tag">
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            <button className="explore-button">Explore More</button>
          </div>
        ))}
      </div>
    </div>
  )
}
