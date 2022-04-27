import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../Components/Layout/Container/Container';

const UserDetails = (props) => {
  const [userData, setUserData] = useState('');
  const userId = useContext(dataContext);
  useEffect(() => {
    // fetch('https://www.ag-grid.com/example-assets/row-data.json')
    // fetch('https://jsonplaceholder.typicode.com/users')

    fetch(
      'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
    )
      .then((response) => response.json())
      .then((data) => {
        let newData = data
          .map((item) => (item.id = item.email))
          .find((item) => item.id === userId);
        console.log(newData);
        console.log(userId);
        setUserData(data);
      });
  }, []);

  const findUser = () => {
    console.log('page is loaded');
    console.log(userData);
  };

  return <h1 onLoad={findUser}>Hello my old friend! Your id is {userId}</h1>;
};

export default UserDetails;
