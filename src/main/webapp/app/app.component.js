"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Contact_1 = require("./Contact");
var contacts_service_1 = require('./services/contacts.service');
var AppComponent = (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
        this.currentContact = new Contact_1.Contact();
    }
    AppComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getAllContacts().then(function (contacts) { return _this.contacts = contacts; });
    };
    AppComponent.prototype.createContact = function (nif, name, surname) {
        var _this = this;
        if (!nif)
            return;
        this.contactService.createNewContact(nif, name, surname)
            .then(function (contact) {
            var oldContact = _this.contacts.filter(function (contact) { return contact.nif == nif; })[0];
            if (oldContact) {
                oldContact.name = contact.name;
                oldContact.surname = contact.surname;
            }
            else {
                _this.contacts.push(contact);
            }
        });
    };
    AppComponent.prototype.deleteContact = function (nif) {
        var _this = this;
        this.contactService.deleteContact(nif)
            .then(function () {
            _this.contacts = _this.contacts.filter(function (contact) { return contact.nif !== nif; });
        });
    };
    AppComponent.prototype.updateModal = function (nif) {
        this.currentContact = new Contact_1.Contact(this.contacts.filter(function (contact) { return contact.nif == nif; })[0]);
    };
    AppComponent.prototype.updateContact = function (contact) {
        var _this = this;
        this.contactService.updateContact(contact)
            .then(function (contactUpdated) {
            var contact = _this.contacts.filter(function (contact) { return contact.nif == contactUpdated.nif; })[0];
            contact.name = contactUpdated.name;
            contact.surname = contactUpdated.surname;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/newContactForm.template.html',
            providers: [contacts_service_1.ContactService]
        }), 
        __metadata('design:paramtypes', [contacts_service_1.ContactService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map