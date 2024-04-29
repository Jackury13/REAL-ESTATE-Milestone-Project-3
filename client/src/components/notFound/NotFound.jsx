import React from 'react'
import classes from './notFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>This page does not exist</h2>
        <Link to='/'>Go back to home</Link>
      </div>
    </div>
  )
}

export default NotFound