import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sw-personnages',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'random-user-list',
    loadChildren: () => import('./pages/random-user-list/random-user-list.module').then( m => m.RandomUserListPageModule)
  },
  {
    path: 'sw-personnages',
    loadChildren: () => import('./pages/sw-personnages/sw-personnages.module').then( m => m.SwPersonnagesPageModule)
  },
  {
    path: 'sw-details/:id',
    loadChildren: () => import('./pages/sw-details/sw-details.module').then( m => m.SwDetailsPageModule)
  },
  {
    path: 'sw-planet',
    loadChildren: () => import('./pages/sw-planet/sw-planet.module').then( m => m.SwPlanetPageModule)
  },
  {
    path: 'sw-planet-details/:id',
    loadChildren: () => import('./pages/sw-planet-details/sw-planet-details.module').then( m => m.SwPlanetDetailsPageModule)
  },
  {
    path: 'sw-ship',
    loadChildren: () => import('./pages/sw-ship/sw-ship.module').then( m => m.SwShipPageModule)
  },
  {
    path: 'sw-ship-details/:id',
    loadChildren: () => import('./pages/sw-ship-details/sw-ship-details.module').then( m => m.SwShipDetailsPageModule)
  },
  {
    path: 'sw-films',
    loadChildren: () => import('./pages/sw-films/sw-films.module').then( m => m.SwFilmsPageModule)
  },
  {
    path: 'sw-films-characters/:id',
    loadChildren: () => import('./pages/sw-films-characters/sw-films-characters.module').then( m => m.SwFilmsCharactersPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
