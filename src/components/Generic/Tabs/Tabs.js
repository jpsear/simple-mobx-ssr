import React, { Component } from 'react';
import styles from './Tabs.scss';
import TabItems from './TabItems';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import TabStore from '../../../stores/Tabs';

@observer
class Tabs extends Component {
  constructor(props) {
    super(props);
    this.store = new TabStore(props.tabs);
  }

  render() {
    let type = this.props.type || 'primary';

    return (
      <div className={styles.tabs}>
        <TabItems tabs={this.props.tabs} type={type} store={this.store} />
        {
          React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
              active: this.store.active
            })
          )
        }
      </div>
    );
  }
}

@observer
class TabContent extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.active == '#' + this.props.id ? '' : styles.hide}>
        {this.props.children}
      </div>
    );
  }
}

export { Tabs, TabContent }
export default Tabs;
