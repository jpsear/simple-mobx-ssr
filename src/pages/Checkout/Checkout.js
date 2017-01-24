import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Spring, Section, HelloTitle, Heading, Form, Input, Button, Grid, Row, Col } from '@components/Generic';

import styles from './Checkout.scss';
import gutters from '@styles/generic/gutters';

@observer
class Checkout extends Component {
  render() {
    return (
      <div>
        <HelloTitle type="slim" />

        <Section bg="gallery">
          <Spring padding="vertical">
            <div className={styles.container}>
              <Heading priority="h3" weight="thin" className={styles.heading}>About you</Heading>

              <div className={styles.content}>
                <Form>
                  <Grid>
                    <Row>
                      <Col size="1/2" sm="1/1">
                        <Input type="text" label="First name" />
                      </Col>
                    </Row>
                    <Row>
                      <Col size="1/2" sm="1/1">
                        <Input type="text" label="Last name" />
                      </Col>
                    </Row>
                  </Grid>
                </Form>
              </div>
            </div>

            <div className={styles.container}>
              <Heading priority="h3" weight="thin" className={styles.heading}>Credit check</Heading>

              <div className={styles.content}>
                <Form>
                  <Grid>
                    <Row>
                      <Col size="1/2">
                        <Input type="text" label="First name" />
                      </Col>
                    </Row>
                  </Grid>
                </Form>
              </div>
            </div>
          </Spring>
        </Section>
      </div>
    );
  }
}

export default Checkout;
