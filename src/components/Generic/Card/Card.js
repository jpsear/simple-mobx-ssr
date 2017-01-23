import React from 'react';
import { Link } from 'react-router';

import gutters from '@styles/generic/gutters';

import { Heading, Icon, Button, Grid, Row, Col } from '@components/Generic';

import Image950 from '@images/promo/promo-phone-950.jpg';
import Image640 from '@images/promo/promo-phone-640.jpg';
import Image320 from '@images/promo/promo-phone-320.jpg';
import TickSimple from '@images/icons/tick-simple.svg';

import styles from './Card.scss';

export default class Card extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        { 
          this.props.promoText ? 
          <div className={styles.featured + " " + styles["promo" + this.props.promoColour]}>
            {this.props.promoText}
          </div>
          : 
          null 
        }
        
        <div className={styles.body}>
          <div className={styles.inner}>
            <div className={styles.imageFrame}>
              <div className={styles.image}>
                <picture>
                    <source data-srcSet={Image320} media="(max-width: 320px)" srcSet={Image320} />
                    <source data-srcSet={Image640} media="(max-width: 640px)" srcSet={Image640} />
                    <img data-srcSet={Image950} alt="Girl reading in the library" srcSet={Image950} />
                </picture>
              </div>
            </div>
            <div className={styles.content}>
              <Heading
                priority="h4"   
                align="left"
                weight="thin"
                className={gutters.remove}>
                  {this.props.title}
              </Heading>

              <p>
                {this.props.introText}
              </p>

              <Heading
                priority="h4"   
                align="left"
                weight="bold"
                className={gutters.remove}>
                  {this.props.cost}
              </Heading>

              <div className={styles.controls}>

                { 
                  this.props.buttonState == "selected" ? 
                    <Grid>
                      <Row>
                        <Col size="1/2" sm="1/1" padding="horizontal" className={styles.added}>
                          <Button className={gutters.top}>
                            <Icon icon={TickSimple} />
                            Added
                          </Button>
                        </Col>

                        <Col size="1/2" sm="1/1" padding="horizontal" className={styles.remove}>
                          <Button type="tertiary" className={gutters.top}>Remove</Button>
                        </Col>
                      </Row>
                    </Grid> 
                  :
                    <Button align="center" type="secondary" className={gutters.top}>Add this extra</Button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
