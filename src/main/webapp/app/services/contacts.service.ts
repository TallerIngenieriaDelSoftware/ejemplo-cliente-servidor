import {Injectable} from "@angular/core";
import {Contact} from "../Contact";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const REST_URL = "http://localhost:8080/rest/people/";

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getAllContacts(): Promise<Contact[]> {
  return this.http.get(REST_URL)
    .toPromise()
    .then(function(response){
      var data = response.json().person;
      var contacts: Contact[] = [];
      for(var item in data){
        var c = new Contact(data[item]);
        contacts.push(c);
      }
      return contacts;
    });
  }

  createNewContact(nif: number, name: string, surname: string): Promise<Contact>{
    var dato = {'name': name, 'surname': surname, 'nif': nif};
    return this.http.post(REST_URL, dato)
      .toPromise()
      .then(function(response){
        var c = new Contact(response.json());
        return c;
      });
  }

  updateContact(contact: Contact): Promise<Contact>{
    var updatedContact = {'name': contact.name, 'surname': contact.surname, 'nif': contact.nif}
    return this.http.put(REST_URL + contact.nif, updatedContact)
      .toPromise()
      .then(() => contact);

  }

  deleteContact(nif: number): Promise<void>{
    return this.http.delete(REST_URL + nif)
      .toPromise()
      .then(()=>null);
  }




}
