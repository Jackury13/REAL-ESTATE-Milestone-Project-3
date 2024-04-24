import React from 'react'
import classes from './popularProperties.module.css'
import { Link } from 'react-router-dom'


const PopularProperties = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you </h2>
        </div>
        <div className={classes.properties}>
          <Link to={'/properties?type=beach&continent=0&priceRange=1'}>
            <img src={img1} />
            <div className={classes.quantity}>34 properties</div>
            <h5>Beach properties</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties