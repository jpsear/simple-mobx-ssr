import React from 'react';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import styles from './TabItems.scss';

@observer
export default class TabItems extends React.Component {
  renderTabs(tabs) {
    let items = [];

    tabs.forEach((tab) => {
      let active = '';

      if (tab.link == this.props.store.active) {
        active = ' ' + styles.active;
      }

      items.push(
        <Link
          to={tab.link}
          key={tab.link}
          data-js={tab.link}
          className={styles.tab + active}
          onClick={this.props.store.onItemClick.bind(this.props.store)}>
            {tab.text}
        </Link>
      );
    });

    return items;
  }
  
  render() {
    return (
      <div className={styles.controls + ' ' + styles[this.props.type]}>
        {this.renderTabs(this.props.tabs)}
      </div>
    );
  }
}
