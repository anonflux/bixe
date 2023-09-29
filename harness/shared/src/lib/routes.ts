import { Routes } from '@angular/router';
import { CommingledScopeContainer, ScopeContainer } from './containers';
import {
  commingledStoreResolver,
  GlobalStoreResolver,
  IsolatedStoreResolver,
} from './store-resolver';

export const bixeRoutes: Routes = [
  {
    path: 'ng-module/global',
    component: ScopeContainer,
    resolve: { store: GlobalStoreResolver },
  },
  {
    path: 'ng-module/isolated',
    component: ScopeContainer,
    resolve: { store: IsolatedStoreResolver },
  },
  {
    path: 'ng-module/commingled',
    component: CommingledScopeContainer,
    resolve: { commingled: commingledStoreResolver },
  },
  { path: '', redirectTo: 'ng-module/global', pathMatch: 'full' },
];
