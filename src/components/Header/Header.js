import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='m-2'>
      <Link className='p-2 m-2 text-red-500 text-lg font-semibold' to='/menu'>Menu</Link>
      <Link className='p-2 m-2 text-red-500 text-lg font-semibold' to='/offer'>Offer</Link>
      <Link className='p-2 m-2 text-red-500 text-lg font-semibold' to='/career'>Career</Link>
      <Link className='p-2 m-2 text-red-500 text-lg font-semibold' to='/reward'>Reward</Link>
    </div>
  );
};

export default Header;