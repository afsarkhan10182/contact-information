import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ContactService} from "../contact.service";
import {Location} from '@angular/common';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'update-contact',
  templateUrl: './contact-update.component.html',
  styleUrls: ['../app.component.css']
})

export class ContactUpdateComponent implements OnInit {
  contactUpdateForm: FormGroup;
  contact: Contact;

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(params['id']))
      .subscribe(contact => {
        this.contact = contact;
        this.buildForm();
      });
  }

  buildForm(): void {
    this.contactUpdateForm = this.formBuilder.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      email: [this.contact.email, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      number: [this.contact.number, Validators.required],
      status: [this.contact.status, Validators.required],
      id: [this.contact.id],

    });
  }

  update(): void {
    console.log(this.contactUpdateForm);
    let contact = this.contactUpdateForm.value as Contact;

    this.contactService.update(contact)
      .then(() => {
        this.router.navigate(['/contacts']);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
