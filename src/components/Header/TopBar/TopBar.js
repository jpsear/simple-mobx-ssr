import React from 'react';
import { Link } from 'react-router';
import styles from './TopBar.scss';

export default class TopBar extends React.Component {
    render() {
      return (
        <div className={styles.wrapper}>
          <ul className={styles.bar}>
            <li className={styles.spring}>
              <ul className={styles.type}>
                <li>
                  <a href="#" className={styles.active}>Personal</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
              </ul>

              <ul className={styles.language}>
                <li>Find a store</li>
              </ul>
            </li>
          </ul>
        </div>
      );
    }
}