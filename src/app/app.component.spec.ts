import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule}                    from '@angular/platform-browser';
import {NgModule}                         from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule}                       from '@angular/http';
import {AppRoutingModule}                 from './app-routing.module';


import { AppComponent } from './app.component';
import {ContactsComponent}        from './contacts/contacts.component';
import {ContactAddComponent}      from './contacts/contact-add.component';
import {ContactUpdateComponent}   from './contacts/contact-update.component';

describe('AppComponent', () => {
  const routes: Routes = [
    {path: '', redirectTo: '/contacts', pathMatch: 'full'},
    {path: 'update/:id', component: ContactUpdateComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'add', component: ContactAddComponent}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Contact Information'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Contact Information');
  }));

});