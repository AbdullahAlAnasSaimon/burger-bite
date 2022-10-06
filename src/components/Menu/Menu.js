import React from 'react';

const Menu = () => {
  return (
    <div className='grid grid-cols-2 gap-10 w-9/12 mx-auto h-36'>
      <div className='bg-red-100 w-10/12 h-96 rounded-xl'>
        <img className='w-full rounded-t-xl' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1779250930939d73cef4805edbc2d54c1ce8789e-1000x745.png?w=320&q=40&fit=max&auto=format" alt="" />
        <h3>Traditional Item</h3>
      </div>
      <div className='bg-orange-100 w-10/12'>
        <img className='w-full' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d28943717d45a54a4affa0a3544d35bc25d9e648-1000x745.png?w=320&q=40&fit=max&auto=format" alt="" />
        <h3>Specific Item</h3>
      </div>
    </div>
  );
};

export default Menu;