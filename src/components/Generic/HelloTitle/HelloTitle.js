import React from 'react';
import { Heading, Spring, BackgroundImage, Grid, Row, Col } from '@components/Generic';
import styles from './HelloTitle.scss';

export default class HelloTitle extends React.Component {
  render() {
    let type = styles[this.props.type || 'standard'];
    let style = [
      styles.hello,
      type
    ].join(' ');

    return (
      <div className={style}>
        <Heading priority="h1" type="light" weight="thin" align="center" className={styles.title}>Lorem Ispum</Heading>
        {
          this.props.type !== 'slim' ?
            <HelloGrid />
          :
            null
        }
        <BackgroundImage type="hello-title"/>
      </div>
    );
  }
}

export class HelloGrid extends React.Component {
  render() {
    return (
      <Spring size="md">
        <Grid>
          <Row>
            <Col size="1/3">
              <Heading priority="h5" type="light" weight="bold" align="center">Ready to join?</Heading>
              <p className={styles.subtext}>Call us free on 08080 408 408 or 08080 996 777 for business</p>
            </Col>
            <Col size="1/3">
              <Heading priority="h5" type="light" weight="bold" align="center">Ready to join?</Heading>
              <p className={styles.subtext}>We've got you covered</p>
            </Col>
            <Col size="1/3">
              <Heading priority="h5" type="light" weight="bold" align="center">Ready to join?</Heading>
              <p className={styles.subtext}>Order online, collect in store</p>
            </Col>
          </Row>
        </Grid>
      </Spring>
    );
  }
}
