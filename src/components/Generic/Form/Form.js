import React from 'react';
import { Button } from '@components/Generic';
import Input from './Input';
import styles from './Form.scss';

export class Form extends React.Component {
  render() {
    return (
      <div className={styles.form}>
        { this.props.children }
      </div>
    );
  }
}

export { Input, Button };
export default Form;
