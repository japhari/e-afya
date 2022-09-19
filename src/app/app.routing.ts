import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/layout/not-found/not-found.component';
import { PrivateComponent } from './pages/layout/private/private.component';
import { PublicComponent } from './pages/layout/public/public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  //Public Routes
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },

  //Protected Routes
  {
    path: 'main',
    component: PrivateComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '',
        data: { breadcrumb: 'Dashboard' },
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
