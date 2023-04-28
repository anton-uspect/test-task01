import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { PublicRoutes } from '@/resources/routes';

const Router = () => (
  <Routes>
    {PublicRoutes.map(({ path, Element }) => (
      <Route element={<Element />} key={path} path={path} />
    ))}
  </Routes>
);

export default Router;
