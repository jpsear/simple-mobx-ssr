import React from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col, Heading, Button, Icon } from '@components/Generic';

import NowTV from '@images/promo/now-tv.png';
import Netflix from '@images/promo/netflix.png';
import Spotify from '@images/promo/spotify.png';
import styles from './Promotion.scss';
import gutters from '@styles/generic/gutters';

export default class Promotion extends React.Component {
  render() {
    return (
      <div className={styles.promotion}>
        <Grid>          
          <Row>
            <Col size="3/5" sm="1/1" className={styles.column}>
              <Grid class={styles.headline}>          
                <Row>
                  <Col size="2/3" sm="1/1">
                    <Heading
                      priority="h4"
                      type="light"
                      weight="thin"
                      align="center"
                      className={styles.label}>
                        {this.props.title}
                    </Heading>
                  </Col>
                  <Col size="1/3" sm="1/1" className={styles.buttonWrapper}>
                    <Button type="primary" className={styles.button}>{this.props.buttonText}</Button>
                  </Col>
                </Row>
              </Grid>
            </Col>
            <Col size="2/5" sm="1/1" className={styles.column}>
              <Grid>          
                <Row>
                  <Col size="1/3" className={styles.item}>
                    <img data-src={NowTV} alt="now tv logo" className={styles.brand} src={NowTV} />
                  </Col>
                  <Col size="1/3" className={styles.item}>
                    <img data-src={Netflix} alt="netflix logo" className={styles.brand} src={Netflix} />
                  </Col>
                  <Col size="1/3" className={styles.item}>
                    <img data-src={Spotify} alt="spotify logo" className={styles.brand} src={Spotify} />
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
