import React from 'react';
import styles from './Grid.scss';

export class Grid extends React.Component {
    render() {
      return (
        <div className={this.props.class + ' ' + styles.grid}>
          {this.props.children}
        </div>
      );
    }
}

export class Row extends React.Component {
    render() {
      return (
        <div className={styles.row + ' ' + (this.props.className || '')}>
          {this.props.children}
        </div>
      );
    }
}

export class Col extends React.Component {
    render() {
      return (
        <div className={styles.column + this.style(this.props) + " " + styles[this.props.align] + " " + (this.props.className || '')}>
          {this.props.children}
        </div>
      );
    }

    style(props) {
      let sizes = ' ' + styles['column--' + (this.props.size || '1/1')];

      if (props.sm) {
        sizes += (' ' + styles['column--sm-' + this.props.sm]);
      }

      if (props.md) {
        sizes += (' ' + styles['column--md-' + this.props.md]);
      }

      if (props.padding) {
        sizes += (' ' + styles[this.props.padding]);
      }

      return sizes;
    }
}

export default Grid;