import {Component, OnInit} from '@angular/core';
import { Contact } from "./Contact";
import { ContactService } from './services/contacts.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/newContactForm.template.html',
  providers: [ContactService]
})

export class AppComponent implements OnInit{

  contacts: Contact[];
  currentContact = new Contact();
  constructor(private contactService: ContactService) { }

  getContacts(): void {
   this.contactService.getAllContacts().then(contacts => this.contacts = contacts);
  }

  createContact(nif: number, name: string, surname: string){
    if(!nif) return;
    this.contactService.createNewContact(nif, name, surname)
      .then(contact => {
        var oldContact = this.contacts.filter(contact => contact.nif == nif)[0];
        if(oldContact){
          oldContact.name = contact.name;
          oldContact.surname = contact.surname;
        }
        else {
          this.contacts.push(contact);
        }
      });
  }

  deleteContact(nif: number){
    this.contactService.deleteContact(nif)
      .then(() => {
        this.contacts = this.contacts.filter(contact => contact.nif !== nif);
      });
  }

  updateModal(nif: number){
    this.currentContact = new Contact(this.contacts.filter(contact => contact.nif == nif)[0]);
  }

  updateContact(contact: Contact){
    this.contactService.updateContact(contact)
      .then(contactUpdated =>{
        var contact = this.contacts.filter(contact => contact.nif == contactUpdated.nif)[0];
        contact.name = contactUpdated.name;
        contact.surname = contactUpdated.surname;
      });
  }

  ngOnInit(): void {
    this.getContacts();
  }
}
