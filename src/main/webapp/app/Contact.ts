export class Contact {

  nif: number;
  name: string;
  surname: string;

  constructor();
  constructor(contact: Contact);
  constructor(object: string);

  constructor(contact?: Contact|string) {
    if(!contact) return;
    const temp = (typeof contact == "string")?JSON.parse(contact):contact;

    this.nif = temp.nif?temp.nif:null;
    this.name =  temp.name?temp.name:null;
    this.surname =  temp.surname?temp.surname:null;

  }


}
