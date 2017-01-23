import React, { Component } from 'react';
import { action } from 'mobx'
import { Link } from 'react-router'

class HomePage extends Component {
  @action static fetchData({state}) {
    state.app.title = 'Another Page'
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
