import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';

const Categories = () => {
  const categories = useLoaderData();
  return (
    <div>
      <div className='w-10/12 mx-auto'>
      <h2 className='text-3xl font-bold text-orange-900 text-center p-8 bg-orange-100 my-5'>Traditional Country List</h2>
      {
        categories.meals.map((category, index) => <CategoriesDetails
        key={index}
        category={category}
        ></CategoriesDetails>)
      }
    </div>
    </div>
  );
};

export default Categories;