import React, { Component } from 'react';
import { action } from 'mobx'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import { Section, Spring, Heading, Tabs, TabContent, Accordion, AccordionItem, Notification, BannerGrid, HelloTitle } from '@components/Generic';
import { Breadcrumbs, SocialBar, BusinessCustomer, PlanTable } from '@components';

import styles from './HomePage.scss';

//import { observer } from 'mobx-react'
//@observer(["state"]) // Only required if you use or change the state outside fetchData
@CSSModules(styles)
class HomePage extends Component {
  @action static fetchData({state}) {
    state.app.title = 'Home'
  }
  
  render() {
    return (
      <section>
        <h1>Home</h1>
        <p>Welcome to the fastest website in the universe !</p>
        <Link to="/about">About Us</Link>
      </section>
    )
  }
}

export default HomePage
