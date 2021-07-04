import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientComponent } from './views/client/client.component';
import { HomeComponent } from './views/home/home.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clients',
    component: ClientComponent,
  },
  {
    path: 'clients/create',
    component: ClientCreateComponent,
  },
  {
    path: 'clients/delete/:id',
    component: ClientDeleteComponent,
  },
  {
    path: 'clients/update/:id',
    component: ClientUpdateComponent,
  },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
HomeComponent;
