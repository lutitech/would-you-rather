import React from 'react'
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand brand-font">Would You Rather</span>
        <div className="collapse navbar-collapse">
          {props.authedUser === undefined
          ? <p>Loading...</p>
          : props.authedUser === null
          ? <LoggedOut />
          : <LoggedIn />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
