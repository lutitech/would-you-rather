import React, { Component } from 'react'
import NewPollForm from '../components/NewPollForm'

class NewPoll extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container mt-4">
          <h3>Create New Poll</h3>
          <hr/>
          
          <div className="d-flex justify-content-center mt-4">
            <NewPollForm />
          </div>
        </div>
      </section>
    )
  }
}
export default NewPoll