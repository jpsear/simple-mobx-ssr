import React from 'react';

import styles from './Heading.scss';

export default class Heading extends React.Component {
    render() {
      let Component = `${this.props.priority}`;
      let priorityStyle = this.getStyle(this.props.priority);
      let classes = this.props.className || '';

      return (
        <Component
          className={[
            styles.heading, 
            styles[this.props.type],
            priorityStyle,
            styles[this.props.weight],
            styles[this.props.align],
            styles[this.props.noGutters],
            classes].join(' ')
          }>
            {this.props.children}
        </Component>
      );
    }

    getStyle(priority) {
      let number = this.props.priority.split('')[1];
      return styles['heading--' + (number || '1')];
    }
}
