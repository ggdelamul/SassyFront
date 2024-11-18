import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './Page-Not-Found/page-not-found/page-not-found.component';
import { provideHttpClient } from '@angular/common/http';
import { ExercicesAnnuelsListComponent } from './Exercices_Annuel/exercices-annuels-list/exercices-annuels-list.component';
import { ExercicesAnnuelsDetailComponent } from './Exercices_Annuel/exercices-annuels-detail/exercices-annuels-detail.component';
import { ClientsListComponent } from './client/clients-list/clients-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientAddComponent } from './client/client-add/client-add.component';

const routes: Routes = [
  {
    path: 'HomePage',
    component: HomePageComponent,
    title: 'Accueil',
  },
  {
    path: 'clients',
    component: ClientsListComponent,
    title: 'clients',
  },
  {
    path: 'client/:id',
    component: ClientDetailComponent,
    title: 'client',
  },
  {
    path: 'editerClient/:id',
    component: ClientEditComponent,
    title: 'Editer un client',
  },
  {
    path: 'ajouter',
    component: ClientAddComponent,
    title: 'Ajouter un client',
  },
  {
    path: 'exercicesannuels',
    component: ExercicesAnnuelsListComponent,
    title: 'Tout les exercices annuels',
  },
  {
    path: 'exercicesannuels/:id',
    component: ExercicesAnnuelsDetailComponent,
    title: 'Exercice annuel',
  },
  {
    path: '',
    redirectTo: '/HomePage',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page introuvable',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
