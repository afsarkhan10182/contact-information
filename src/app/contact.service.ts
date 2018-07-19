import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Contact} from "./contacts/contact";
import {Headers, Http} from '@angular/http';

@Injectable()
export class ContactService {

  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersURL = `http://localhost:3000/posts`;

  constructor(private http: Http) {
  };

  /**
   * Return all users
   * @returns {Promise<Contact[]>}
   */
  getContacts(): Promise<Contact[]> {
    return this.http.get(this.usersURL)
      .toPromise()
      .then(response => {
        return response.json() as Contact[];
      })
      .catch(this.handleError);
  }

  /**
   * Returns user based on id
   * @param id:string
   * @returns {Promise<Contact>}
   */
  getContact(id: string): Promise<Contact> {
    const url = `${this.usersURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleError);
  }

  /**
   * Adds new user
   * @param user:Contact
   * @returns {Promise<Contact>}
   */
  add(user: Contact): Promise<Contact>{
    return this.http.post(this.usersURL, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleError)
  }

  /**
   * Updates user that matches to id
   * @param user:Contact
   * @returns {Promise<Contact>}
   */
  update(user: Contact): Promise<Contact>{
    return this.http.put(`${this.usersURL}/${user.id}`, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleError)
  }

  /**
   * Removes user
   * @param id:string
   * @returns {Promise<Contact>}
   */
  remove(id: string): Promise<any>{
    return this.http.delete(`${this.usersURL}/${id}`)
      .toPromise()
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  /**
   * Handles error thrown during HTTP call
   * @param error:any
   * @returns {Promise<never>}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
