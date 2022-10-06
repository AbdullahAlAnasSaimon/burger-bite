import React from 'react';
import { Link } from 'react-router-dom';

const RightSideHeader = () => {
  return (
    <div>
      <Link className='py-1 px-4 mx-2 text-white bg-red-500 text-lg rounded-full' to='/sign-up'>Sign Up</Link>
      <Link className='py-1 px-4 mx-2 text-white bg-red-500 text-lg rounded-full' >Cart</Link>
    </div>
  );
};

export default RightSideHeader;