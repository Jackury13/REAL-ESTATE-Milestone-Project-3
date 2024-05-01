import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2> About Luxury State</h2>
          <p>Luxury State is a company that promotes some of the most; unique, luxurious, and even remote real estate from around the world. From tree homes to mega mansions, our vacation home destinations are meant to be more than a home away from home. Join us on your journey to finding a piece of heaven on earth.</p>
        </div>
        <div className={classes.col}>
          <h2> Contact Us</h2>
          <span>Phone: (555)867-5309</span>
          <span>Email: Luxurystate@luxury.com</span>
        </div>
        <div className={classes.col}>
          <h2> Location</h2>
          <span>777 Las Vegas Blvd</span>
          <span>Las Vegas nv</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer