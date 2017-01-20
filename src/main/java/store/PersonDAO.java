package store;

import data.Person;
import data.People;

import javax.inject.Inject;

public class PersonDAO implements PersonStorage {
    public final static Person NOT_FOUND = new Person("Not found", "", "");

    @Inject
    private DataStorage storage;

    @Override
    public boolean create(Person person) {
        return storage.createPerson(person);
    }

    @Override
    public Person retrieve(String nif) {
        return storage.retrievePerson(nif);
    }

    @Override
    public Person update(Person person) {
        return storage.updatePerson(person);
    }

    @Override
    public Person delete(String nif) {
        return storage.deletePerson(nif);
    }

    @Override
    public People retrieveAll() {
        return storage.retrievePeople();
    }
}
