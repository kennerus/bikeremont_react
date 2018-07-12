import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const PricePageBody = props => {
  const {tableHead, prices} = props;
  return (
    <div className={css(styles.tableWrapper)}>
      <table className={css(styles.table)}>
        <thead>
        <tr>
          <th
            className={css(styles.th)}
            colSpan="2"
          >{tableHead}</th>
        </tr>
        </thead>

        <tbody>
        {prices.map((price) => (
          <tr
            className={css(styles.tr)}
            key={price.name
            }>
            <td className={css(styles.td)}>{price.name}</td>
            <td className={css(styles.td)}>{price.price}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = StyleSheet.create({
  tableWrapper: {
    position: 'relative',
    zIndex: '1',
    width: ' 960px',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (max-width: 992px)': {
      width: '100%',
      overflow: 'scroll',
    }
  },
  table: {
    width: '100%',
    minWidth: '500px',
    marginTop: '30px',
    borderCollapse: 'collapse',
  },
  tr: {
    ':hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  th: {
    height: '40px',
    padding: '5px 20px',
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '1.2',
    color: '#b71c1c',
    border: '1px solid #616161',
  },
  td: {
    height: '40px',
    padding: '2px 20px',
    lineHeight: '1.2',
    border: '1px solid #616161',
    ':nth-child(2)': {
      textAlign: 'center'
    },
    '@media (max-width: 576px)': {
      padding: '5px 20px',
    }
  },
});

PricePageBody.propTypes = {
  tableHead: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired
};

export default PricePageBody;
