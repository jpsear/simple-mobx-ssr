import React from 'react';
import { Link } from 'react-router';
import styles from './Button.scss';

export default class Button extends React.Component {
  render() {
    let type = styles[this.props.type] || styles['primary'];
    let alignment = styles[this.props.align] || '';
    let url = this.props.url || "#";

    return (
      <Link to={url} className={type + ' ' + alignment + ' ' + this.props.className}>
      	{this.props.children}
      </Link>
    );
  }
}