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
}
