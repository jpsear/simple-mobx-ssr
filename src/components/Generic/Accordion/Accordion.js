import React, { Component } from 'react';

import AccordionItem from './AccordionItem';

import styles from './Accordion.scss';

export class Accordion extends Component {
  render() {
    return (
      <div className={styles.accordion}>
        { this.props.children }
      </div>
    );
  }
}

export default Accordion;
export { AccordionItem }
