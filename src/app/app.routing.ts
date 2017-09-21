import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortlandLinksComponent } from './portland-links/portland-links.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpReceivedComponent } from './rsvp-received/rsvp-received.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portland-links',
    component: PortlandLinksComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'rsvp-received',
    component: RsvpReceivedComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
