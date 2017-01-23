import React from 'react';
import styles from './Section.scss';

export default class Section extends React.Component {
    render() {
      return (
        <div className={styles.wrapper + ' ' + styles[this.props.bg]}>
          {this.props.children}
        </div>
      );
    }
}