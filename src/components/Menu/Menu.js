import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='grid grid-cols-2 gap-10 w-9/12 mx-auto mt-10 text-orange-900 font-bold'>
        <div className='bg-orange-100 w-10/12 h-auto rounded-xl'>
          <Link to='/menu/traditional'>
          <img className='w-full rounded-t-xl' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1779250930939d73cef4805edbc2d54c1ce8789e-1000x745.png?w=320&q=40&fit=max&auto=format" alt="" />
          <h3 className='text-3xl text-center p-5'>Traditional Item</h3>
          </Link>
        </div>
      <div className='bg-orange-100 w-10/12 rounded-xl'>
        <img className='w-full rounded-t-xl' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d28943717d45a54a4affa0a3544d35bc25d9e648-1000x745.png?w=320&q=40&fit=max&auto=format" alt="" />
        <h3 className='text-3xl text-center p-5'>Specific Item</h3>
      </div>
    </div>
  );
};

export default Menu;