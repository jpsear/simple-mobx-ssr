import React, { Component } from 'react';
import CSSModules from 'react-css-modules'
import { action } from 'mobx'
import { Link } from 'react-router'

import { Section, Spring, Heading, Tabs, TabContent, Accordion, AccordionItem, Notification, BannerGrid, HelloTitle } from '@components/Generic';
import { Breadcrumbs, SocialBar, BusinessCustomer, PlanTable } from '@components';

import gutters from '@styles/generic/gutters';
import styles from './HomePage.scss';

import { observer, inject } from 'mobx-react'
import actions from '../../actions/actions'

@inject(["state"]) // Only required if you use or change the state outside fetchData
@CSSModules(styles)
class HomePage extends Component {
  @action static fetchData({state}) {
    state.app.title = 'Browse'
    state.browse.data = 'Loading...'
    return actions.fetchArticles(state)
  }

  renderData(data) {
    return data.map(item => {
      return <div>{item.first_name}</div>
    })
  }

  render() {
    return (
      <section>
      This is data from the endpoint:
      { this.renderData(this.props.state.browse.data.data) }

       <HelloTitle />
        <Breadcrumbs pages={['Home', 'Shop', 'Device']} />

				<Notification />

        <Section bg="gallery">
          <Spring padding="vertical">
          	<Heading
              priority="h3"
              weight="thin"
              align="center"
              padding="top"
              className={gutters.remove + ' ' + gutters.bottom}>
                Choose your SIM only bundle
            </Heading>

            <Tabs tabs={[
              {link: '#12-months', text: '12 months'},
              {link: '#30-days', text: '30 days'},
              {link: '#payg', text: 'Pay as you go'}
            ]}>
              <TabContent id='12-months'>
                <PlanTable />
                <PlanTable />
                <PlanTable 
                  type='double'
                  banner={{
                    text: 'Double your data and get entertainment for just £6 more per month',
                    color: 'cyan'
                  }} />
                <PlanTable />
              </TabContent>
              <TabContent id='30-days'>
                <PlanTable />
                <PlanTable />
              </TabContent>
              <TabContent id='payg'>
                <p>Tab 3</p>
              </TabContent>
            </Tabs>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, justo vitae 
            facilisis iaculis, risus enim aliquam lectus, nec gravida sapien ipsum eget tellus. 
            Aliquam leo sem, mattis et sodales vel, feugiat vitae nulla. Nam pellentesque ex id 
            magna mollis, at gravida purus commodo. Ut egestas diam vel ante accumsan, vitae 
            fermentum sapien varius. Donec ante magna, vehicula dictum dapibus ut, rhoncus sodales 
            est. Cras sodales mattis diam, sit amet eleifend nisi malesuada non. Nulla quis 
            vestibulum urna. Aliquam vehicula metus non maximus dictum. Fusce interdum arcu mauris, 
            vitae varius massa tempus blandit. Fusce lacinia vestibulum rhoncus. Duis tempor nisl 
            id auctor molestie.</p>

            <p>Praesent auctor est metus, et congue mi tempus luctus. Nulla rhoncus, nunc ac 
            fermentum pharetra, orci arcu aliquam dolor, eget egestas ante justo a lacus. In 
            augue felis, condimentum et tincidunt vel, molestie at est. Curabitur ut malesuada 
            sem. Suspendisse potenti. Cras vel pretium dolor. Aliquam nisi elit, gravida et 
            vulputate a, dictum eu libero. Vestibulum orci nisl, egestas ac maximus a, vulputate 
            a leo. Nullam blandit pharetra orci et consectetur. Nullam dictum ullamcorper dolor 
            nec dignissim. Proin eu tempus eros, in bibendum nunc.</p>
          </Spring>
        </Section>

        <Section>
          <Spring padding="vertical">
            <Heading priority="h3" className={gutters.remove + ' ' + gutters.bottom}>
                Keep the phone you love and save on your data, calls and texts with a SIM only deal that best suits you.
            </Heading>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, justo vitae 
            facilisis iaculis, risus enim aliquam lectus, nec gravida sapien ipsum eget tellus. 
            Aliquam leo sem, mattis et sodales vel, feugiat vitae nulla. Nam pellentesque ex id 
            magna mollis, at gravida purus commodo. Ut egestas diam vel ante accumsan, vitae 
            fermentum sapien varius. Donec ante magna, vehicula dictum dapibus ut, rhoncus sodales 
            est. Cras sodales mattis diam, sit amet eleifend nisi malesuada non. Nulla quis 
            vestibulum urna. Aliquam vehicula metus non maximus dictum. Fusce interdum arcu mauris, 
            vitae varius massa tempus blandit. Fusce lacinia vestibulum rhoncus. Duis tempor nisl 
            id auctor molestie.</p>

            <p>Praesent auctor est metus, et congue mi tempus luctus. Nulla rhoncus, nunc ac 
            fermentum pharetra, orci arcu aliquam dolor, eget egestas ante justo a lacus. In augue 
            felis, condimentum et tincidunt vel, molestie at est. Curabitur ut malesuada sem. 
            Suspendisse potenti. Cras vel pretium dolor. Aliquam nisi elit, gravida et vulputate a, 
            dictum eu libero. Vestibulum orci nisl, egestas ac maximus a, vulputate a leo. Nullam 
            blandit pharetra orci et consectetur. Nullam dictum ullamcorper dolor nec dignissim. 
            Proin eu tempus eros, in bibendum nunc.</p>
          </Spring>
        </Section>

        <BannerGrid />

        <Section>
          <Spring padding="vertical">
            <Accordion>
              <AccordionItem heading="What is a SIM only deal?">
                <p>A SIM only deal gives you an allowance of data, minutes and texts, all on one 
                SIM card. We offer 12-month and 30-day SIM only bundles and Pay as you go SIMs.</p>

                <p>Just insert the SIM into any Vodafone device, or one that’s not locked to a 
                different network, to get started. If it’s a new SIM card, you can follow our SIM 
                swap instructions for setting up and keeping your current number.</p>
              </AccordionItem>
              <AccordionItem heading="Why buy a SIM only deal?">
                <p>Choosing a SIM only bundle has a number of benefits. It’s perfect if your Pay 
                monthly contract has just ended and you want to reduce your monthly costs while 
                you wait for your ideal next phone.</p>

                <p>Or if you love the phone you’ve already got and see no reason to change it, 
                you can continue to use it and enjoy the flexibility SIM only offers.</p>

                <p>For an even more flexible option, choose a 30-day SIM contract. If you change 
                your mind or want to upgrade to another phone, it’s up to you.</p>

                <p>Opting for a 12-month SIM only contract means you can enjoy even better value 
                4G data, calls and texts, with deals starting from just £9.50 a month. But it 
                doesn’t tie you down – you can upgrade to a Pay monthly contract with a new device 
                after just 3 months of your SIM only contract.</p>
              </AccordionItem>
            </Accordion>
          </Spring>
        </Section>

        <SocialBar />
        <BusinessCustomer />
        <Link to="/about">About Us</Link>
      </section>
    )
  }
}

export default HomePage
