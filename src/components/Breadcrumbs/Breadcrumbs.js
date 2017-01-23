import React from 'react';
import { Link } from 'react-router';

import { Spring, Grid, Row, Col, Icon } from '@components/Generic';

import Chevron from '@images/icons/chevron-right.svg';
import styles from './Breadcrumbs.scss';

export default class Breadcrumbs extends React.Component {
  renderPages(pages) {
    let items = [];

    pages.forEach((page, index, arr) => {
      items.push(
        <li key={page + '-' + index}>
          <Link to="/" className={styles.crumb}>{page}</Link>
        </li>
      );

      if (index < (arr.length - 1)) {
        items.push(
          <li key={page + '-' + index + '-icon'}>
            <Icon icon={Chevron} size="small" />
          </li>
        );
      }
    });

    return items;
  }

  render() {
    return (
      <div className={styles.breadcrumbs}>
        <Spring>
          <Grid>
            <Row>
              <Col size="2/3" sm="1/1">
                <ol className={styles.list}>
                  { this.renderPages(this.props.pages) }
                </ol>
              </Col>

              <Col size="1/3" sm="1/1">
                <p className={styles.text}>
                  [Prices inc. VAT] <Link className={styles.link} to="/">[Hyperlink]</Link>
                </p>
              </Col>
            </Row>
          </Grid>
        </Spring>
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  pages: React.PropTypes.array
};
