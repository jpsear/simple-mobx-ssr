import React from 'react';
import { observer } from 'mobx-react';

import { ProductSelector } from '@components';
import { HelloTitle, Spring, Heading } from '@components/Generic';

import styles from './Brand.scss';
import data from '../../json/iphone7.json';

@observer
export default class Brand extends React.Component {
  render() {
    return (
      <div>
        <HelloTitle title="test" />
        <Spring size="lg">
          <ProductSelector title="Apple iPhone 7" products={data.products} copy={data.copy}/>
        </Spring>
      </div>
    );
  }
}
