import React from 'react';
import styles from './Icon.scss';

export default class Icon extends React.Component {
    render() {
        return (
            <span
                dangerouslySetInnerHTML={{__html: this.props.icon}}
                className={styles.icon + ' ' + styles[this.props.size] + ' ' + styles[this.props.type]}>
            </span>
        );
    }
}