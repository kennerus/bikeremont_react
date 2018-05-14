import React from 'react';

const Client = props => {
  const {img} = props;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Client;
