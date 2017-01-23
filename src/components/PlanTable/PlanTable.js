import React, { Component } from 'react';

import PlanTableBanner from './PlanTableBanner';
import { Spring, Heading, Button, Grid, Row, Col } from '@components/Generic';

import styles from './PlanTable.scss';

class PlanTable extends Component {
	renderBanner(banner) {
		if (banner) {
			return <PlanTableBanner title={banner.text} color={banner.color} />;
		}
	}

  render() {
    let type = styles[this.props.type] || '';

    return (
      <div className={styles.planTable + ' ' + type}>
				{ this.renderBanner(this.props.banner) }

        <div className={styles.content}>
          <Grid>
            <Row>
              <Col size="1/5" md="1/3" sm="1/1">
                <p>UK data</p>
                <Heading priority="h3" weight="bold" className={styles.red}>XXXMB</Heading>
                <p className={styles.red}>Standard Bundle</p>
              </Col>
              <Col size="2/5" md="1/3" sm="1/1">
                <Grid>
                  <Row>
                    <Col size="1/2" md="1/1" sm="1/1">
                      <Grid>
                        <Row>
                          <Col size="1/1" md="1/1" sm="1/2">
                            <p className={styles.minutes}>UK minutes</p>
                            <Heading priority="h3" weight="bold">500</Heading>
                          </Col>
                          <Col size="1/1" md="1/1" sm="1/2">
                            <p className={styles.texts}>UK texts</p>
                            <Heading priority="h3" weight="bold">Unlimited</Heading>
                          </Col>
                        </Row>
                      </Grid>
                    </Col>
                    <Col size="1/2" md="1/1" sm="1/1">
                      <p className={styles.roaming}>Roaming</p>
                      <p><strong>Not included in this bundle</strong></p>
                    </Col>
                  </Row>
                </Grid>
              </Col>
              <Col size="2/5" md="1/3" sm="1/1">
                <Grid>
                  <Row className={styles.costs}>
                    <Col size="2/7" md="1/2" sm="1/2" padding="horizontal">
                      <Heading priority="h3" weight="bold" className={styles.red}>£XX.xx</Heading>
                      <p className={styles.red}>a month</p>
                    </Col>
                    <Col size="2/7" md="1/2" sm="1/2" padding="horizontal">
                      <Heading priority="h3" className={styles.red}>£XX.xx</Heading>
                      <p className={styles.red}>up front</p>
                    </Col>
                    <Col size="3/7" md="1/1" sm="1/1" padding="horizontal">
                      <Button type="secondary" className={styles.see}>Select plan</Button>
                      <a href="#" className={styles.details}>See full details</a>
                    </Col>
                  </Row>
                </Grid>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default PlanTable;
