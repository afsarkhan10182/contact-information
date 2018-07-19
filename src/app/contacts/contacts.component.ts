import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';
import {ContactService} from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ContactService]
})

export class ContactsComponent implements OnInit {
  contacts: Contact[];
  title = 'Contact Information';
  constructor(private router: Router, private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.getContacts();
  }
  /**
   * Gets the existing contacts
   */
  getContacts(): void {
    this.contactService.getContacts()
      .then(contacts => {
        this.contacts = contacts;
      });
  }

  remove(id: string): void {
    this.contactService.remove(id)
      .then(() => {
        this.getContacts();
      });
  }

  update(id: string): void {
    this.router.navigate(['/update', id]);
  }

  viewDetail(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}
