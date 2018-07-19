import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';


import {ContactsComponent}        from './contacts/contacts.component';
import {ContactAddComponent}      from './contacts/contact-add.component';
import {ContactUpdateComponent}   from './contacts/contact-update.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'update/:id', component: ContactUpdateComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'add', component: ContactAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
