import React from 'react';
import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';

export default class MenuLink extends React.Component {
  render() {
    return (
      <Link className={css(styles.link)} to={this.props.link}>
        {this.props.text}
      </Link>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    padding: '5px',
    color: '#fafafa',
    fontSize: '17px',
    textDecoration: 'none',
    ':hover': {
      color: '#bdbdbd'
    }
  }
});