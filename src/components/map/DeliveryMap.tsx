'use client'

// React Imports
import { useEffect, useRef } from 'react'

// Leaflet Imports
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Type Imports
type DeliveryMapProps = {
  pickupLocation: [number, number] // [latitude, longitude]
  dropoffLocation: [number, number]
  truckLocation: [number, number]
  routeCoordinates: [number, number][]
  progressIndex: number // Index in routeCoordinates where truck has reached
}

const DeliveryMap = ({ pickupLocation, dropoffLocation, truckLocation, routeCoordinates, progressIndex }: DeliveryMapProps) => {
  // Refs
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    // Initialize map if not already initialized
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView(pickupLocation, 13)

      // Add base map tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current)
    }

    const map = mapRef.current

    // Clear existing layers
    map.eachLayer(layer => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        layer.remove()
      }
    })

    // Custom icons
    const pickupIcon = L.icon({
      iconUrl: '/images/map/pickup-marker.png',  // Add these icons to your public folder
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })

    const dropoffIcon = L.icon({
      iconUrl: '/images/map/dropoff-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })

    const truckIcon = L.icon({
      iconUrl: '/images/map/truck-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })

    // Add markers
    L.marker(pickupLocation, { icon: pickupIcon }).addTo(map)
    L.marker(dropoffLocation, { icon: dropoffIcon }).addTo(map)
    L.marker(truckLocation, { icon: truckIcon }).addTo(map)

    // Draw completed route portion
    if (progressIndex > 0) {
      L.polyline(routeCoordinates.slice(0, progressIndex + 1), {
        color: '#4CAF50',
        weight: 4
      }).addTo(map)
    }

    // Draw remaining route portion
    if (progressIndex < routeCoordinates.length - 1) {
      L.polyline(routeCoordinates.slice(progressIndex), {
        color: '#4CAF50',
        weight: 4,
        opacity: 0.5,
        dashArray: '10, 10'
      }).addTo(map)
    }

    // Fit bounds to show all markers and route
    const bounds = L.latLngBounds([pickupLocation, dropoffLocation, truckLocation])
    map.fitBounds(bounds, { padding: [50, 50] })

    return () => {
      // Cleanup is handled by clearing layers above
    }
  }, [pickupLocation, dropoffLocation, truckLocation, routeCoordinates, progressIndex])

  return <div id="map" style={{ height: '500px', width: '100%' }} />
}

export default DeliveryMap
