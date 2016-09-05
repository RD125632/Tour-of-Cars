import { Routes } from '@angular/router';

import { PromiseRoutes } from './promise/index';
import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...PromiseRoutes
];
