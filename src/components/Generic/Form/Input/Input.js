import React from 'react';
import styles from './Input.scss';

export default class Input extends React.Component {
  render() {
    return (
      <div>
        { this.props.label ?
          <Label text={this.props.label} />
          :
          null
        }
        <input
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          className={[styles.input, this.props.className].join(' ')} />
      </div>
    );
  }
}

export class Label extends React.Component {
  render() {
    return (
      <label className={styles.label}>
        { this.props.text }
      </label>
    );
  }
}