import React from 'react';
import { observer } from 'mobx-react';

import { Spring, Heading, Button } from '@components/Generic';

import styles from './BusinessCustomer.scss';

@observer
export default class BusinessCustomer extends React.Component {
  render() {
    return (
      <div className={styles.business}>
        <Spring align="center">
          <Heading
            priority="h4"
            type="light"
            weight="thin"
            align="center">
              Are you a business customer?
          </Heading>
          
          <Button align="center">Go to business site</Button>
        </Spring>
      </div>
    );
  }
}
