import React, { Component } from 'react';
import styles from './Root.scss';
import CSSModules from 'react-css-modules';
import gutters from '@styles/generic/gutters.scss';

@CSSModules(styles)
class Root extends Component {
  render() {
    return (
      <div styleName="wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default Root;
