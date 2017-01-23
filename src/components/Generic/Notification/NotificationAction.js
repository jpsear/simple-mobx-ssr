import React, { Component } from 'react';
import { Link } from 'react-router';

import { Button } from '@components/Generic';

import styles from './Notification.scss';

class NotificationAction extends Component {
	renderLink(type, link, text) {
		if (type == 'button') {
			return <Button type='secondary' link={link} className={styles.button}>{text}</Button>;
		}

		return <Link to={link} className={styles.link}>{text}</Link>;
	}

  render() {
    return (
      <div className={styles.action}>
        <div className={styles.holder}>
					{ this.renderLink(this.props.type, this.props.link, this.props.text) }
				</div>
      </div>
    );
  }
}

export default NotificationAction;
