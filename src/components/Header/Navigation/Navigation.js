import React from 'react';
import { Link } from 'react-router';
import { Icon } from '@components/Generic';
import styles from './Navigation.scss';

export default class Navigation extends React.Component {
  items(links) {
    let menu = [];

    links.forEach((link, index) => {
      let direction = '';
      let text = link;

      if (typeof(link) !== 'string') {
        text = <Icon icon={link.text} />;
        direction = styles[link.direction];
      }

      menu.push(
        <li className={styles.item + ' ' + direction} key={index}>
          <Link to="/" className={styles.link}>
            {text}
          </Link>
        </li>
      );
    });

    return menu;
  }

  render() {
      return (
        <div className={styles.wrapper + ' ' + styles[this.props.type]}>
          <ul className={styles.navigation}>
            {this.items(this.props.links)}
          </ul>
        </div>
      );
  }
}
