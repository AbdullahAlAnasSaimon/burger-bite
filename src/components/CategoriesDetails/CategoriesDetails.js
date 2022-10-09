import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesDetails = ({ category }) => {
  const { strCategory } = category;
  return (
    <div>
      <Link to={`${strCategory}`}>
        <div className='p-2 mt-2 border-2 border-orange-300 text-orange-900 bg-orange-50 rounded-md hover:bg-white'>
          <div>{strCategory}</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesDetails;