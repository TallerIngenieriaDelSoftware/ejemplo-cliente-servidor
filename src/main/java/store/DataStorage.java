package store;

import data.Person;
import data.People;

public interface DataStorage {
    boolean createPerson(Person person);
    Person retrievePerson(String nif);
    Person updatePerson(Person person);
    Person deletePerson(String nif);
    People retrievePeople();
}
