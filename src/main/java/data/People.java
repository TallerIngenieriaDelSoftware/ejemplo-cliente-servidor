package data;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Collection;
import java.util.HashSet;

@XmlRootElement
public class People {
    @XmlElement(name = "person")
    private Collection<Person> people2;

    public People() {
        super();
        people2 = new HashSet<>();
    }

    public People(Collection<Person> people) {
        this.people2 = people;
    }
}
