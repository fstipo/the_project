import React from 'react';

const UserDetails = (props) => {
  console.log(props.data);
  return <h1>Hello {props.data.first} my old friend! </h1>;
};

export default UserDetails;
