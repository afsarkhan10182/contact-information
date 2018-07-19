import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {Contact} from './contact';
import {Router} from '@angular/router';
import {ContactService} from "../contact.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from "@angular/common";

@Component({
  selector: 'add-contact',
  templateUrl: './contact-add.component.html',
  styleUrls: ['../app.component.css']
})

export class ContactAddComponent {
  contactAddForm: FormGroup;
  contact = new Contact();

  constructor(private contactService: ContactService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    this.contactAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      number: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  add(): void {
    let contact = this.contactAddForm.value as Contact;
    this.contactService.add(contact)
      .then(response => {
        this.router.navigate(['/contacts']);
      })
  }

  goBack(): void {
    this.location.back();
  }
}
