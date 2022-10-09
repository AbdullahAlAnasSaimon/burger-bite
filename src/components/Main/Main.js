import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Logo from '../../images/burger-bite-1.png';
import RightSideHeader from '../RightSideHeader/RightSideHeader';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='bg-orange-100'>
      <div className='flex text-center justify-between items-center p-3'>
        <div className='w-full lg:w-5/12 fixed lg:static bottom-0 left-0 bg-white lg:bg-orange-100'>
          <Header></Header>
        </div>
        <div className='w-2/12 mx-auto md:mx-0'>
          <Link className='w-20 mx-auto' to='/home'><img className='w-20 mx-auto' src={Logo} alt='Company logo' /></Link>
        </div>
        <div className='w-5/12 hidden md:block'>
          <RightSideHeader></RightSideHeader>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;