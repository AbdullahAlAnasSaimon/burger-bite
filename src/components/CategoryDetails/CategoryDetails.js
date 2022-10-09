import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CategoryDetails = () => {
  const itemsBySpecific = useLoaderData();
  const [items, setItems] = useState('');

useEffect(() => {
  const getLocation = window.location.href.split('/');
  setItems(getLocation[getLocation.length - 1]);
}, []);

  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-5'>{items} Item</h1>
      <h3 className='text-center text-2xl font-semibold'>Items Found : {itemsBySpecific.meals.length}</h3>
      <div className='grid grid-cols-3 gap-5 w-10/12 mx-auto mt-10 text-orange-900 font-bold'>
        {
          itemsBySpecific.meals.map(sitem => <FoodBySpecificItem
            key={sitem.idMeal}
            meal={sitem}
          ></FoodBySpecificItem>)
        }
      </div> 
    </div>
  );
};

const FoodBySpecificItem = ({ meal }) => {
  const {idMeal, strMeal, strMealThumb } = meal;
  return (
      <div className='bg-white w-full h-auto rounded-xl shadow-md hover:shadow-lg'>
        <Link to={`${idMeal}`}>
          <img className='w-full rounded-t-xl' src={strMealThumb} alt="" />
          <h3 className='text-xl text-center p-5'>{strMeal}</h3>
        </Link>
      </div>
  );
};

export default CategoryDetails;