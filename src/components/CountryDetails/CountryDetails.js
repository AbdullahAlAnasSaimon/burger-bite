import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const CountryDetails = () => {
  const itemsByCountry = useLoaderData();
  const [items, setItems] = useState([]);

useEffect(() => {
  const getLocation = window.location.href.split('/');
  setItems(getLocation[getLocation.length - 1]);
}, []);

console.log(items);
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-5'>{items} Traditional Food</h1>
      <h3 className='text-center text-2xl font-semibold'>Items Found : {itemsByCountry.meals.length}</h3>
      <div className='grid grid-cols-3 gap-10 w-10/12 mx-auto mt-10 text-orange-900 font-bold'>
        {
          itemsByCountry.meals.map(item => <CountryByFood
            key={item.idMeal}
            meal={item}
          ></CountryByFood>)
        }
      </div> 
    </div>
  );
};

const CountryByFood = ({ meal }) => {
  const {idMeal, strMeal, strMealThumb } = meal;
  return (
      <div className='bg-orange-100 w-full h-auto rounded-xl'>
        <Link to={`${idMeal}`}>
          <img className='w-full rounded-t-xl' src={strMealThumb} alt="" />
          <h3 className='text-xl text-center p-5'>{strMeal}</h3>
        </Link>
      </div>
  );
};

export default CountryDetails;