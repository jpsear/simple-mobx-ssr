import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';

import { Heading, Icon } from '@components/Generic';

import Chevron from '@images/icons/chevron-down.svg';
import styles from './AccordionItem.scss';

@observer
class AccordionItem extends Component {
  @observable isShowing = false;

  onItemClick = (event) => {
    event.preventDefault();
    this.isShowing = !this.isShowing;
  }

  renderTitle() {
    let arrowAnimation = {
      rotateX: this.isShowing ? 180 : 0,
      transformOriginX: ['42%', '42%']
    };

    return (
      <button className={styles.button} onClick={this.onItemClick}>
        <Heading priority="h3" className={styles.heading}>
          <span className={styles.text}>
            {this.props.heading}
          </span>
          <VelocityComponent duration={300} animation={arrowAnimation}>
            <span className={styles.chevron}>
              <Icon icon={Chevron} />
            </span>
          </VelocityComponent>
        </Heading>
      </button>
    )
  }

  renderContent() {
    if (this.isShowing) {
      return <div className={styles.content}>{this.props.children}</div>
    }
  }

  render() {
    return (
      <div className={styles.item}>
        { this.renderTitle() }
        
        <VelocityTransitionGroup enter="slideDown" leave="slideUp">
          { this.renderContent() }
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default AccordionItem;
