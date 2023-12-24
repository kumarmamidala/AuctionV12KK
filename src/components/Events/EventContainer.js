import React from 'react'
import EventsPage from './EventsPage'
import EventsHeader from './EventsHeader'
import './events-styles/events.css'
import '../Welcome/Welcome.css'

export const Events = () => {
  return (
    <section className="eventsContainer">
      <div>
        <EventsHeader />
        <EventsPage />
      </div>
    </section>
  )
}
