import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { Spring, Icon } from '@components/Generic';
import IconList from './IconList';

import Facebook from '@images/icons/facebook-thin.svg';
import Share from '@images/icons/share.svg';
import styles from './SocialBar.scss';

@observer
export default class SocialBar extends React.Component {
	@observable iconsShowing = false;

	handleClick = (event) => {
		event.preventDefault();
		this.iconsShowing = !this.iconsShowing;
	}

  render() {
    return (
      <div className={styles.social}>
        <Spring>
          <div className={styles.share}>
            <a href="#" className={[styles.link, styles.icon].join(' ')} onClick={this.handleClick}>
              <Icon size="medium" icon={Share} />
            </a>
            { this.iconsShowing ? <IconList /> : null }
          </div>
        </Spring>
      </div>
    );
  }
}
