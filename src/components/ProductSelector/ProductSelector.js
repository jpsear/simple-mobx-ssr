import React from 'react';
import { observer } from 'mobx-react';

import ProductSelectorStore from './../../stores/ProductSelector';
import { Grid, Row, Col, Heading, Button } from '@components/Generic';

import styles from './ProductSelector.scss';

@observer
export default class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
    this.store = new ProductSelectorStore(props.products, props.copy);

    // set title of component
    this.title = props.title;
  }

  capacityButtons(currentCapacity, capacities, clickHandler) {
    let buttons = [];
    
    capacities.forEach((capacity, index) => {
      let styleActive = capacity === currentCapacity ? styles['capacity-options--active'] : '';
      let stylesList = [styles['capacity-options'], styleActive];

      buttons.push(
        <a onClick={clickHandler} key={capacity + index} data-value={capacity} className={stylesList.join(' ')}>
          { capacity + 'GB' } 
        </a>
      );
    });

    return buttons;
  }

  colourButtons(currentColour, colours, clickHandler) {
    let buttons = [];

    colours.forEach((colour, index) => {

      let styleActive = colour.colour === currentColour ? styles['colour-options--active'] : '';
      let stylesList = [styles['colour-options'], styleActive];
      let productColour = colour.colour.toLowerCase().replace(' ', '-');

      productColour = styles['colour-options--' + productColour];

      stylesList.push(productColour);

      buttons.push(
        <a onClick={clickHandler} key={colour.colour + index} data-value={colour.colour} className={stylesList.join(' ')}>
          <span className={styles['visually-hidden']}>{colour.colour}</span>
        </a>
      );
    });

    return buttons;
  }

  createMarkup() {
    return {__html: this.store.product.plan};
  }

  render() {
    return (
      <div className={styles['product-selector']}>
        <Grid>
          <Row>
            <Col size="1/2">
              <img src={'//assets.vodafone.co.uk/' + this.store.product.image} />
            </Col>
            <Col size="1/2">
              <Heading priority="h3" weight="thin" align="left" padding="none" noGutters="no-gutter--top">{this.title}</Heading>
              <p>{this.store.copy.marketing_text}</p>
              <div>
              {
                this.capacityButtons(
                  this.store.capacity,
                  this.store.capacities,
                  this.store.handleCapacityClick.bind(this.store)
                )
              }
              </div>
              <div>
              {
                this.colourButtons(
                  this.store.colour,
                  this.store.colours,
                  this.store.handleColourClick.bind(this.store)
                )
              }
              </div>
              <div className={styles.tray}>
                <Grid>
                  <Row>
                    <Col>
                      <Grid classes="tray__costs">
                        <Row>
                          <Col size="1/3">
                            <div className={styles['tray-price'] + " " + styles['tray-price--first']}>
                              <span>From</span>
                              <Heading priority="h4" weight="bold" align="left" padding="none" noGutters="no-gutter--all">£{this.store.product.tariff_pm}</Heading>
                              <span>a month</span>
                            </div>
                          </Col>
                          <Col size="2/3">
                            <div className={styles['tray-price']}>
                              <span>with</span>
                              <Heading priority="h4" weight="bold" align="left" padding="none" noGutters="no-gutter--all">£{this.store.product.tariff_up}</Heading>
                              <span>Upfront cost</span>
                            </div>
                          </Col>
                        </Row>
                      </Grid>
                    </Col>
                  </Row>
                </Grid>
              </div>
              <Grid>
                <Row>
                  <Col size="1/2">
                    <Button url={this.store.product.desktopBundleURL} >See all available bundles</Button>
                  </Col>
                  <Col size="1/2">
                  </Col>
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col size="1/2">
              <Heading priority="h4" weight="bold" align="left" noGutters="no-gutter--top">Our best-selling bundle</Heading>
              <div dangerouslySetInnerHTML={this.createMarkup()} />
            </Col>
            <Col size="1/2">
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
