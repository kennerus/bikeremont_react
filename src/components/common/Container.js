import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

// const Container = (props) => {
//   console.log(props);
//   return(
//     <div className={css(styles.container)}>
//       {this.props.children}
//     </div>
//   )
// }

export default class Container extends React.Component {
  render() {
    return(
      <div className={css(styles.container)}>
        {this.props.children}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '1170px',
    margin: '0 auto',
    padding: '0 15px',
    boxSizing: 'border-box',
    '@media (max-width: 1200px)': {
      width: '100%',
    },
    '@media (max-width: 768px)': {
      padding: '0 10px',
    }
  }
});

// export default Container;