import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryByTradition from '../CountryByTradition/CountryByTradition';

const Traditional = () => {
  const tradition = useLoaderData();
  // console.log(tradition.meals);
  return (
    <div className='w-10/12 mx-auto'>
      <h2 className='text-3xl font-bold text-orange-900 text-center p-8 bg-orange-100 my-5'>Traditional Country List</h2>
      {
        tradition.meals.map((tradition, index) => <CountryByTradition key = {index} country = {tradition}></CountryByTradition>)
      }
    </div>
  );
};

export default Traditional;