import React from 'react'
import classes from './newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to stay up too date with our latest destinations?</h5>
          <h2>Send us your email, we will do the rest. </h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="Type your email" className={classes.input}/>
          <button className={classes.button}>Send</button> 
        </div>
      </div>
    </div>
  )
}

export default Newsletter
