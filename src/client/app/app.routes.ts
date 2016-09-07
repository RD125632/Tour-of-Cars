import { Routes } from '@angular/router';

import { PromiseRoutes } from './promise/index';
import { AboutRoutes } from './about/index';

export const routes: Routes = [
  ...AboutRoutes,
  ...PromiseRoutes
];
