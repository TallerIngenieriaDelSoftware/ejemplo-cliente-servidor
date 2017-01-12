package store;

import data.Person;
import data.People;

import java.util.HashMap;

public class BBDD implements DataStorage {
    private HashMap<String, Person> people = new HashMap<>();

    public boolean createPerson(Person person) {
        people.put(person.getNif(), person);
        return true;
    }

    @Override
    public Person retrievePerson(String nif) {
        return people.get(nif);
    }

    @Override
    public Person updatePerson(Person person) {
        return people.put(person.getNif(), person);
    }

    @Override
    public Person deletePerson(String nif) {
        return people.remove(nif);
    }

    @Override
    public People retrievePeople() {
        return new People(people.values());
    }
}
