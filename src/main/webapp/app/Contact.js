"use strict";
var Contact = (function () {
    function Contact(contact) {
        if (!contact)
            return;
        var temp = (typeof contact == "string") ? JSON.parse(contact) : contact;
        this.nif = temp.nif ? temp.nif : null;
        this.name = temp.name ? temp.name : null;
        this.surname = temp.surname ? temp.surname : null;
    }
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map