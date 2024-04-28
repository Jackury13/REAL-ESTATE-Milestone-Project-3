import React from 'react'
import classes from './footer.module.css'


const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2> About Luxury State</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati asperiores, dignissimos nisi nostrum accusantium ad ut totam at voluptatibus?</p>
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