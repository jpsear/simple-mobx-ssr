import React from 'react';
import { observer } from 'mobx-react';

import { Spring, Heading } from '@components/Generic';

import styles from './SimOnly.scss';

@observer
export default class SimOnly extends React.Component {
  render() {
    return (
      <Spring size="lg">
        <Heading priority="h3" weight="thin" align="center" padding="top">Choose your SIM only bundle</Heading>
      </Spring>
    );
  }
}
