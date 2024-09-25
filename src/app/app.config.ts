import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { FactureListComponent } from './facture/facture-list/facture-list.component';
import { ClientsListComponent } from './client/clients-list/clients-list.component';
import { FactureDetailComponent } from './facture/facture-detail/facture-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PageNotFoundComponent } from './Page-Not-Found/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'HomePage',
    component: HomePageComponent,
    title: 'Accueil',
  },
  {
    path: 'factures',
    component: FactureListComponent,
    title: 'toutes les factures',
  },
  { 
    path: 'clients', 
    component: ClientsListComponent, 
    title: 'clients' 
  },
  { 
    path: 'facture/:id', 
    component: FactureDetailComponent, 
    title: 'facture' 
  },
  { 
    path: 'client/:id', 
    component: ClientDetailComponent, 
    title: 'client' 
  },
  { 
    path: '', 
    redirectTo: '/HomePage', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent , 
    title: 'Page introuvable'
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
