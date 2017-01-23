import React from 'react';
import styles from './Spring.scss';

export default class Spring extends React.Component {
  render() {
    let padding = this.props.padding ? styles[this.props.padding] : '';
    let alignment = styles[this.props.align] || styles['left'];

    return (
      <div className={styles.spring + ' ' + styles[this.props.size] + ' ' + padding + ' ' + alignment}>
        {this.props.children}
      </div>
    );
  }
}