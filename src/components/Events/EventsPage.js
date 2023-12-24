import React from 'react'
import events from './events'
import Fade from 'react-reveal/Fade'
import './events-styles/events.css'

const EventsPage = () => {
  return (
    <Fade left cascade>
      <section className="events">
        {
          /* mapping throught the events array */
          events.map(
            ({ image: { src, alt }, venue, date, theme, description, id }) => {
              /* destructuring the event */
              return (
                <div className="left-and-right" key={id}>
                  <div className="left">
                    <img src={src} alt={alt} />
                    <h1>
                      {' '}
                      &#160;<span>{venue}</span> &#160;
                    </h1>
                  </div>

                  <div className="right">
                    {/* <h2>{date}</h2> */}
                    <h1 class="heading !text-left event-right-heading">
                      {theme}
                    </h1>
                    <p class="paragraph">{description}</p>
                  </div>
                </div>
              )
            }
          )
        }
      </section>
    </Fade>
  )
}

export default EventsPage
