import React, { Component } from 'react';
import { action } from 'mobx'
import { Link } from 'react-router'

//import { observer } from 'mobx-react'
//@observer(["state"]) // Only required if you use or change the state outside fetchData
class HomePage extends Component {
  @action static fetchData({state}) {
    state.app.title = 'Home'
  }
  
  render() {
    return (
      <section>
        <h1>Another Page</h1>
        <Link to="/about">About Us</Link>
      </section>
    )
  }
}

export default HomePage
