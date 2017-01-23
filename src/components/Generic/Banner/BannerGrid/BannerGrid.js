import React from 'react';
import styles from './BannerGrid.scss';
import { Icon, BackgroundImage, Heading, Grid, Row, Col } from '@components/Generic';
import gutters from '@styles/generic/gutters';

import Roaming from '@images/icons/roaming.svg';
import World from '@images/icons/world.svg';
import Network from '@images/icons/network.svg';

export default class BannerGrid extends React.Component {
    render() {
      return (
        <div className={styles.banner + ' ' + styles[this.props.type]}>
          <div className={styles.background}>
            <div className={styles.content}>
              <Heading priority="h3" type="light" weight="thin" align="center" className={gutters.remove + ' ' + gutters.bottom}>Why Vodafone?</Heading>
              <Grid>
                <Row>
                  <Col size="1/3" sm="1/1" padding="horizontal" align="center">
                    <Icon icon={Roaming} size="large" type="circle" />
                    <Heading priority="h4" type="light" align="center">Inclusive roaming data</Heading>
                    <Heading priority="h6" type="light" align="center">Take your minutes, texts and picture messages across 40 European destinations with up to 4GB data</Heading>
                  </Col>
                  <Col size="1/3" sm="1/1" padding="horizontal" align="center">
                    <Icon icon={World} size="large" type="circle" />
                    <Heading priority="h4" type="light" align="center">Travelling even further</Heading>
                    <Heading priority="h6" type="light" align="center">Use your UK minutes texts and data in an additional 58 destinations worldwide for just £5 a day on the days you use it</Heading>
                  </Col>
                  <Col size="1/3" sm="1/1" padding="horizontal" align="center">
                    <Icon icon={Network} size="large" type="circle" />
                    <Heading priority="h4" type="light" align="center">Put our network to the test</Heading>
                    <Heading priority="h6" type="light" align="center">If you're not totally happy with our network come back to us within 30 days of joining and we'll cancel your contract</Heading>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>

          <BackgroundImage type="why-vodafone" />
        </div>        
      );
    }
}
