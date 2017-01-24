import React from 'react';
import { Link } from 'react-router';
import styles from './NotFoundPage.scss';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>404</h1>
        <h3>We couldn't find this page.</h3>
        <Link to="/">Back to the app</Link>
      </div>
    );
  }
}