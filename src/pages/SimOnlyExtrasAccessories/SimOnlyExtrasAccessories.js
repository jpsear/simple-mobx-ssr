import React from 'react';
import { observer } from 'mobx-react';

import { Breadcrumbs, SocialBar, BusinessCustomer, PlanTable, Promotion } from '@components';
import { HelloTitle, Section, Spring, Heading, Grid, Row, Col, BannerGrid, Accordion, Button,	Card } from '@components/Generic';

import styles from './SimOnlyExtrasAccessories.scss';
import gutters from '@styles/generic/gutters';

@observer
export default class SimOnlyExtrasAccessories extends React.Component {
  render() {
    return (
      <div>
        <HelloTitle />
        <Breadcrumbs pages={['Home', 'Shop', 'Device']} />

        <Section bg="gallery">
          <Spring padding="vertical">
          	<Heading
              priority="h4"
              weight="thin"
              align="center"
              padding="top"
              className={gutters.remove + ' ' + gutters.bottom}>
                Extras from £2.50 a month
            </Heading>

            <Grid>
              <Row>
                <Col size="1/3" sm="1/1" padding="horizontal">
                  <Card promoText="Suggested for you"
                        promoColour="Cyan"
                        title="Vodafone International"
                        introText="Pecorino macaroni cheese everyone loves. Taleggio camembert de normandie emmental mascarpone chalk and cheese squirty cheese camembert"
                        cost="£5.00 per month" />
                </Col>
                <Col size="1/3" sm="1/1" padding="horizontal">
                  <Card title="100 UK picture messages"
                        introText="Jarlsberg fromage frais cream cheese. Brie rubber cheese roquefort feta stinking bishop cream cheese danish fontina port-salut. Smelly cheese dolcelatte rubber"
                        cost="£5.00 per month"
                        buttonState="selected" />
                </Col>
                <Col size="1/3" sm="1/1" padding="horizontal">
                  <Card promoText="Your previous extra"
                        promoColour="Purple"
                        title="100 international texts"
                        introText="Ricotta monterey jack bocconcini. Cheesecake stinking bishop ricotta blue castello cream cheese the big cheese gouda cottage cheese."
                        cost="£5.00 per month" />
                </Col>
              </Row>
            </Grid>
          </Spring>
        </Section>

        <Section bg="gallery">
          <Spring padding="vertical">
            <Promotion 
              title="Want to double your data to 32GB, and add an entertainment option, all for only £6 a month?"
              buttonText="[Lorem Ipsum]" />
          </Spring>
        </Section>

        <Section bg="gallery">
          <Spring padding="vertical" align="center">
            <Button type="primary">Go to basket</Button>
          </Spring>
        </Section>
      </div>
    );
  }
}
