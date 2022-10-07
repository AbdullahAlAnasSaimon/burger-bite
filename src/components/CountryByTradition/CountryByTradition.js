import React from 'react';
import { Link } from 'react-router-dom';

const CountryByTradition = ({ country }) => {
  const { strArea } = country;

  return (
    <Link to={`${strArea}`}>
      <div className='p-2 my-2 border-2 border-orange-300 text-orange-900 hover:bg-red-100'>
        <div>{strArea}</div>
      </div>
    </Link>
  );
};


export default CountryByTradition;