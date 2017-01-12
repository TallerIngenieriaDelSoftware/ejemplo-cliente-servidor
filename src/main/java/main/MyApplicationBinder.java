package main;

import org.glassfish.hk2.utilities.binding.AbstractBinder;
import store.BBDD;
import store.DataStorage;
import store.PersonDAO;
import store.PersonStorage;

import javax.inject.Singleton;

public class MyApplicationBinder extends AbstractBinder {
    @Override
    protected void configure() {
        bind(BBDD.class).to(DataStorage.class).in(Singleton.class);
        bind(PersonDAO.class).to(PersonStorage.class).in(Singleton.class);
    }
}
