import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then(mod => mod.ClientsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot( // initialise le routeur
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      } // <-- debugging purposes only
    )

  ],

})

export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
