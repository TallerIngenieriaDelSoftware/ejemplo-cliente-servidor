package data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Person {
    private String name;
    private String surname;
    private String nif;
    private PostalAddress postalAddress;

    public Person() {
        super();
    }

    public Person(String name, String surname, String nif, PostalAddress postalAddress) {
        this.name = name;
        this.surname = surname;
        this.nif = nif;
        this.postalAddress = postalAddress;
    }

    public Person(String name, String surname, String nif) {
        this.name = name;
        this.surname = surname;
        this.nif = nif;
    }

    public String getNif() {
        return nif;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;

        Person person = (Person) o;

        if (name != null ? !name.equals(person.name) : person.name != null) return false;
        if (surname != null ? !surname.equals(person.surname) : person.surname != null) return false;
        return nif != null ? nif.equals(person.nif) : person.nif == null;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + (nif != null ? nif.hashCode() : 0);
        return result;
    }
}
