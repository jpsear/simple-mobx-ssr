import React, { Component } from 'react';
import { Link } from 'react-router';

import NotificationAction from './';
import { Spring, Section, Icon } from '@components/Generic';

import styles from './Notification.scss';
import Tick from '@images/icons/tick.svg';
import Info from '@images/icons/info.svg';
import Error from '@images/icons/error.svg';

class Notification extends Component {
  getIcon(type) {
    switch(type) {
      case 'success':
        return Tick;
      case 'warning':
        return Info;
      case 'error':
        return Error;
      default:
        return Info;
    }
  }

	renderAction(link) {
		if (link) {
			return (
				<NotificationAction link={link.to} text={link.text} type={link.type} />
			);
		}
	}

	renderIcon(type = 'default') {
		if (type) {
			let svg = this.getIcon(type);

			return (
				<div className={styles.icon}>
					<Icon icon={svg} />
				</div>
			);
		}
	}

  render() {
    let style = [
      styles.notification,
      styles[this.props.type]
    ].join(' ');

    return (
      <Section>
				<Spring padding="vertical">
					<div className={style}>
						<div className={styles.prompt}>
							{ this.renderIcon(this.props.type) }

							<p className={styles.text}>
								You've successfully added <strong>XXXX</strong>. 
								<strong>Upfront cost: £xx.xx. Monthly cost: £xx.xx</strong>
							</p>
						</div>

						{ this.renderAction(this.props.link) }
					</div>
				</Spring>
			</Section>
    );
  }
}

export default Notification;
