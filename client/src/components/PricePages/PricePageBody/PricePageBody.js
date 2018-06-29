import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const PricePageBody = props => {
  const {tableHead, prices} = props;
  return (
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
        <tr key={price.name}>
          <td className={css(styles.td)}>{price.name}</td>
          <td className={css(styles.td)}>{price.price}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '960px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '30px',
    borderCollapse: 'collapse',
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
    }
  },
});

PricePageBody.propTypes = {
  tableHead: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired
};

export default PricePageBody;
