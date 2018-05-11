import React from 'react';

export default class Container extends React.Component {
  render() {

    return(
      <div className={`${this.props.mainClass} ${this.props.modifier}`}>
        {this.props.children}
      </div>
    )
  }
}
