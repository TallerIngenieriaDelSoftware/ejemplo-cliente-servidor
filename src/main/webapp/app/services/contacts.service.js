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
var core_1 = require("@angular/core");
var Contact_1 = require("../Contact");
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var REST_URL = "http://localhost:8080/rest/people/";
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getAllContacts = function () {
        return this.http.get(REST_URL)
            .toPromise()
            .then(function (response) {
            var data = response.json().person;
            var contacts = [];
            for (var item in data) {
                var c = new Contact_1.Contact(data[item]);
                contacts.push(c);
            }
            return contacts;
        });
    };
    ContactService.prototype.createNewContact = function (nif, name, surname) {
        var dato = { 'name': name, 'surname': surname, 'nif': nif };
        return this.http.post(REST_URL, dato)
            .toPromise()
            .then(function (response) {
            var c = new Contact_1.Contact(response.json());
            return c;
        });
    };
    ContactService.prototype.updateContact = function (contact) {
        var updatedContact = { 'name': contact.name, 'surname': contact.surname, 'nif': contact.nif };
        return this.http.put(REST_URL + contact.nif, updatedContact)
            .toPromise()
            .then(function () { return contact; });
    };
    ContactService.prototype.deleteContact = function (nif) {
        return this.http.delete(REST_URL + nif)
            .toPromise()
            .then(function () { return null; });
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contacts.service.js.map