import React from 'react';

import { Heading, Spring, Grid, Row, Col, Icon } from '@components/Generic';

import Facebook from '@images/icons/facebook-thin.svg';
import Twitter from '@images/icons/twitter-thin.svg';
import styles from './Footer.scss';

class Footer extends React.Component {
    render() {
      return (
        <div className={styles.wrapper}>
          <Spring>
            <div className={styles.content}>
              <h3 data-hidden>Follow us</h3>
              <div className={styles.social}>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/vodafoneUK">
                      <Icon size="extra-large" icon={Facebook} />
                      <span data-hidden>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/VodafoneUK">
                      <Icon size="extra-large" icon={Twitter} />
                      <span data-hidden>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
              <Grid>
                <Row>
                  <Col size="1/4" md="1/1">
                    <Heading priority="h4" type="light">About Vodafone</Heading>
                    <ul className={styles.menu}>
                      <li>
                          <a href="http://www.vodafone.ie/aboutus/">About us</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/accessibility-services/index.htm">Accessibility services</a>
                      </li>
                      <li>
                          <a href="http://www.vodafone.co.uk/careers/index.htm">Careers with Vodafone</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/explore/network/uk-coverage-map/index.htm">Coverage checker</a>
                      </li>
                      <li>
                          <a href="http://www.vodafone.co.uk/about-us/customer-info/">Essential customer information</a>
                      </li>
                      <li>
                          <a href="http://www.vodafone.com/content/digital-parenting.html">Keeping children safe</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/about-this-site/our-privacy-policy/privacy-and-cookies/index.htm">Privacy and cookies</a>
                      </li>
                    </ul>
                  </Col>
                  <Col size="1/4" md="1/1">
                    <Heading priority="h4" type="light">Buying online</Heading>
                    <ul className={styles.menu}>
                      <li>
                        <a href="https://www.vodafone.co.uk/broadband/deals">Broadband deals</a>
                      </li>
                      <li>
                        <a href="http://www.vodafone.co.uk/shop/ipad-and-tablets/index.htm">iPad and tablets</a>
                      </li>
                      <li>
                        <a href="http://www.vodafone.co.uk/shop/plan-selector/index.htm">Mobile Broadband</a>
                      </li>
                      <li>
                        <a href="http://www.vodafone.co.uk/shop/bundles-and-sims/pay-as-you-go-plans/index.htm">Pay as you go bundles</a>
                      </li>
                      <li>
                        <a href="http://shop.vodafone.co.uk/shop/?initialFilters=flt_paymonthly">Pay monthly bundles</a>
                      </li>
                      <li>
                        <a href="http://shop.vodafone.co.uk/shop/contracts-and-deals/mobile-phones?initialFilters=flt_paymonthly">Phones</a>
                      </li>
                      <li>
                        <a href="http://www.vodafone.co.uk/shop/bundles-and-sims/sim-only-deals/index.htm">SIM only bundles</a>
                      </li>
                    </ul>
                  </Col>
                  <Col size="1/4" md="1/1">
                    <Heading priority="h4" type="light">Popular phones</Heading>
                    <ul className={styles.menu}>
                      <li>
                          <a href="https://www.vodafone.co.uk/brands/apple/iphone-6/index.htm">iPhone 6</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/brands/apple/iphone-6s/index.htm#Rose_Gold/16">iPhone 6s</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/brands/apple/iphone-6s-plus/index.htm">iPhone 6s Plus</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/brands/apple/iphone-7/#Black/32">iPhone 7</a>
                      </li>
                      <li>
                          <a href="https://www.vodafone.co.uk/brands/apple/iphone-7-plus/#Rose_Gold/32">iPhone 7 Plus</a>
                      </li>
                      <li>
                          <a href="http://www.vodafone.co.uk/brands/samsung/galaxy-s7-edge/index.htm">Samsung Galaxy S7 edge | S7</a>
                      </li>
                      <li>
                          <a href="http://shop.vodafone.co.uk/shop/contracts-and-deals/vodafone-smart-platinum-7/">Vodafone Smart platinum 7</a>
                      </li>
                    </ul>
                  </Col>
                  <Col size="1/4" md="1/1">
                    <Heading priority="h4" type="light">Help and support</Heading>
                    <ul className={styles.menu}>
                      <li>
                          <a href="http://www.vodafone.co.uk/contact-us/index.htm">Contact us</a>
                      </li>

                      <li>
                          <a href="https://www.vodafone.co.uk/vodafone-uk/forms/complaints/index.htm">Complaints code of practice</a>
                      </li>

                      <li>
                          <a href="http://support.vodafone.co.uk/Device-Guides/">Help with your device</a>
                      </li>

                      <li>
                          <a href="http://www.vodafone.co.uk/shop/existing-customers/track-my-order/index.htm">Track your order</a>
                      </li>

                      <li>
                          <a href="http://forum.vodafone.co.uk/">Vodafone Community</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Grid>

              <Grid class={styles.submenu}>
                <Row>
                  <Col size="1/4" md="1/3">
                    <a href="http://www.vodafone.ie/terms/">Terms &amp; conditions</a>
                  </Col>
                  <Col size="1/4" md="1/3">
                    <a href="http://shop.vodafone.ie/shop/phones">Site map</a>
                  </Col>
                  <Col size="1/4" md="1/3">
                    <a href="http://www.vodafone.ie/terms/privacy/">Privacy policy</a>
                  </Col>
                </Row>
              </Grid>

              <div className={styles.copyright}>
                <p>&copy; 2016 Vodafone Limited. Registered office: Vodafone House, The Connection, Newbury, Berkshire RG14 2FN. Registered in England No 1471587.</p>
              </div>
            </div>
          </Spring>
        </div>
      );
    }
}

export default Footer;
