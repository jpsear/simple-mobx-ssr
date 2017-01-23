import React from 'react';

import { Icon } from '@components/Generic';

import Facebook from '@images/icons/facebook-thin.svg';
import styles from './../SocialBar.scss';

export default class IconList extends React.Component {
  render() {
    return (
      <ul className={styles.icons}>
        <li>
          <a href="#" className={styles.icon}>
            <Icon size="medium" icon={Facebook} />
          </a>
        </li>
      </ul>
    );
  }
}
