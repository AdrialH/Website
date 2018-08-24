import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'products/new', component: NewComponent },
  { path: 'products/:id/edit', component: EditComponent },
  { path: 'products/:id', component: ShowComponent },
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  { path: '**', component: ListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
