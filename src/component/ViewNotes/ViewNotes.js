import React, { Component } from 'react'
import './ViewNotes.css'
import Header from '../Header/Header'

class ViewNotes extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div id='view-notes'>
        <Header history={this.props.history} />
        <div className='notes-wrapper'>
          {this.props.notes && this.props.notes.length > 0 && this.props.notes.map((element, index) => {
            return (
              <div key={index} className='note-card'><div>{element.note}</div></div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ViewNotes
