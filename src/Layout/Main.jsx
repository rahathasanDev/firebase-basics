import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;