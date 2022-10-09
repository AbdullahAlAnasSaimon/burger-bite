import React from 'react';
import { Link } from 'react-router-dom';

const CountryByTradition = ({ country }) => {
  const { strArea } = country;

  return (
    <Link to={`${strArea}`}>
      <div className='p-2 mt-2 border-2 border-orange-300 text-orange-900 bg-orange-50 rounded-md hover:bg-white'>
        <div>{strArea}</div>
      </div>
    </Link>
  );
};


export default CountryByTradition;