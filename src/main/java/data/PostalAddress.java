package data;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class PostalAddress {
    private String city;
    private String province;

    public PostalAddress() {
        super();
    }

    public PostalAddress(String city, String province) {
        this.city = city;
        this.province = province;
    }
}
