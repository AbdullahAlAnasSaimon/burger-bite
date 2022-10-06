import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Logo from '../../images/burger-bite-1.png';
import RightSideHeader from '../RightSideHeader/RightSideHeader';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div className='flex text-center justify-between items-center p-3'>
        <Header></Header>
        <div>
          <Link className='w-20 mx-auto' to='/home'><img className='w-20 mx-auto' src={Logo} alt='Company logo' /></Link>
        </div>
        <RightSideHeader></RightSideHeader>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;