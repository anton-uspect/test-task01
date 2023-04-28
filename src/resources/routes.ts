import type React from 'react';

import HomePage from '@/pages/HomePage';

export const ROUTES = {
  home: '/',
};

export interface IRoutes {
  path: string;
  Element: React.FC;
}

export const PublicRoutes: IRoutes[] = [
  {
    path: ROUTES.home,
    Element: HomePage,
  },
];

export const PrivateRoutes: IRoutes[] = [];
