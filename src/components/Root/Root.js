import React, { Component } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import SocialBar from '@components/SocialBar';

import CSSModules from 'react-css-modules';
import styles from './Root.scss';
import '@styles/styles.scss';

@CSSModules(styles)
class Root extends Component {
  render() {
    return (
      <div styleName="page-container">
        <div styleName="wrapper">
          <div styleName="container">
            <Header />
            <div>
              {this.props.children}
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
