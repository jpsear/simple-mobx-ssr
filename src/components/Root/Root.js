import React, { Component } from 'react';
import styles from './Root.scss';
import CSSModules from 'react-css-modules';
import gutters from '@styles/styles.scss';

@CSSModules(styles)
class Root extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Root;
