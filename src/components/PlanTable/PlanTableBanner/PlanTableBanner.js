import React, { Component } from 'react';

import { Heading } from '@components/Generic';

import gutters from '@styles/generic/gutters';
import styles from './PlanTableBanner.scss';

class PlanTableBanner extends Component {
  render() {
    let color = this.props.color || 'cyan';

    return (
      <div className={styles.banner + ' ' + styles[color]}>
        <Heading priority="h4" weight="bold" align="center" className={gutters.remove + ' ' + styles[color]}>
          { this.props.title }
        </Heading>
      </div>
    );
  }
}

export default PlanTableBanner;
