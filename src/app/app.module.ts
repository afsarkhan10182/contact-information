// Modules
import {BrowserModule}                    from '@angular/platform-browser';
import {NgModule}                         from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule}                       from '@angular/http';
import {AppRoutingModule}                 from './app-routing.module';

// Components
import {AppComponent}                     from './app.component';
import {ContactService}                      from './contact.service';
import {ContactsComponent}                   from './contacts/contacts.component';
import {ContactAddComponent}                 from './contacts/contact-add.component';
import {ContactUpdateComponent}              from './contacts/contact-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactAddComponent,
    ContactUpdateComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
