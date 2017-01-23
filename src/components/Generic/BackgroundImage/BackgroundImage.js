import React from 'react';
import styles from './BackgroundImage.scss';
import Hello from '@images/hello-product-listing.jpg';

export default class BackgroundImage extends React.Component {
  render() {
    return (
      <div className={[styles.wrapper, styles[this.props.type]].join(' ')}></div>
    );
  }
}
