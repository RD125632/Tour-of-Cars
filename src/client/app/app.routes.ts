import { Routes } from '@angular/router';

import { PromiseRoutes } from './promise/index';
import { AboutRoutes } from './about/index';
import { CarCompareRoutes } from './car-compare/index';

export const routes: Routes = [
  ...AboutRoutes,
  ...PromiseRoutes,
  ...CarCompareRoutes
];
