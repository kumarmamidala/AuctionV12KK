import React from 'react'
import Zoom from 'react-reveal/Zoom'
import PhotosCard from './PhotosCard'
import './Photos.css'
import '../Welcome/Welcome.css'

export const Photos = () => {
  return (
    <section className="photos">
      <div className="photosContent">
        <Zoom left>
          <h1 className="title specialities-title">
            .GOLD DOMAIN <span class="!text-black">EXTENSION SPECIALITIES</span>
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            ullam accusamus amet distinctio ratione ab voluptatum porro? Ut,
            dolores et officia distinctio suscipit omnis non, iusto rem natus
            autem cum!
          </p>
        </Zoom>
      </div>
      <div className="photosCorousel">
        <PhotosCard />
      </div>
    </section>
  )
}
