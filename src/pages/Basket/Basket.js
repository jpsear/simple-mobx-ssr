import React from 'react';
import styles from './Basket.scss';
import { Heading, Spring, Form, HelloTitle, Input, Button, Grid, Row, Col  } from '@components/Generic';

export default class Basket extends React.Component {
  render() {
    return (
      <div className={styles.basket}>
        <HelloTitle type="slim" />

        <Section bg="gallery">
          <Spring>
            <p>test</p>
          </Spring>
        </Section>
      </div>
    );
  }
}
