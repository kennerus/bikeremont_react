import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import BackCallModal from '../../common/BackCallModal/BackCallModal';

const PricePageBot = () => {
  return (
    <div className={css(styles.pageBot)}>
      <h3 className={css(styles.title)}>Нужно отремонтировать технику?</h3>
      <BackCallModal
        buttonStyle="backCall-btn"
        buttonText="Оставьте заявку на ремонт"
      />
    </div>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: '29px',
  },
  pageBot: {
    marginTop: '30px',
    marginBottom: '70px',
    textAlign: 'center',
  }
});

export default PricePageBot;
