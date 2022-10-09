import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
  const mealDetail = useLoaderData();
  console.log(mealDetail.meals[0]);
  const { strMeal, strInstructions, strYoutube, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 } = mealDetail.meals[0];
  const sliceYouTube = strYoutube.slice(0, 32);
  const slicedYouTube = sliceYouTube.replace(sliceYouTube, `https://www.youtube.com/embed/`);
  // console.log(finalYouTube);
  const sliceYouTube2 = strYoutube.slice(32, 43);
  // console.log(sliceYouTube2);
  const finalYoutube = slicedYouTube + sliceYouTube2;
  console.log(finalYoutube);
  return (
    <div className='mt-10'>
      <h1 className='text-3xl text-center'>{strMeal}</h1>
      <div className='flex justify-evenly'>
        <img className='inline-block my-5 w-5/12 rounded-md' src={strMealThumb} alt="" />
        <iframe className='my-5 rounded-md' width="560" height="526" src={finalYoutube} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className='w-9/12 mx-auto border-2 border-red-200 p-5 text-lg'>
        <h3 className='text-center text-2xl font-semibold'>Ingredients List</h3>
        <div className='flex justify-between'>
          <p className='text-md font-bold my-3'>Ingredients</p>
          <p className='text-md font-bold my-3'>Mesurements</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient1}</p>  <p>{strMeasure1}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient2}</p>  <p>{strMeasure2}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient3}</p>  <p>{strMeasure3}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient4}</p>  <p>{strMeasure4}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient5}</p>  <p>{strMeasure5}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient6}</p>  <p>{strMeasure6}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient7}</p>  <p>{strMeasure7}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient8}</p>  <p>{strMeasure8}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient9}</p>  <p>{strMeasure9}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient10}</p>  <p>{strMeasure10}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient11}</p>  <p>{strMeasure11}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient12}</p>  <p>{strMeasure12}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient13}</p>  <p>{strMeasure13}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient14}</p>  <p>{strMeasure14}</p>
        </div>
        <div className='flex justify-between'>
          <p>{strIngredient15}</p>  <p>{strMeasure15}</p>
        </div>
        <div className='flex justify-between'>

          <p>{strIngredient16}</p>  <p>{strMeasure16}</p>
        </div>
        <div className='flex justify-between'>

          <p>{strIngredient17}</p>  <p>{strMeasure17}</p>
        </div>
        <div className='flex justify-between'>

          <p>{strIngredient18}</p>  <p>{strMeasure18}</p>
        </div>
        <div className='flex justify-between'>

          <p>{strIngredient19}</p>  <p>{strMeasure19}</p>
        </div>
        <div className='flex justify-between'>

          <p>{strIngredient20}</p>  <p>{strMeasure20}</p>
        </div>
      </div>
      <h2 className='text-center text-2xl my-3 text-black font-semibold'>Cooking Instructions</h2>
      <p className='w-9/12 mx-auto text-orange-900'>{strInstructions}</p>
    </div>
  );
};

export default MealDetails;