import { db } from './Database';

export const addUser =  (email,password) => {
    db.ref('/users').push({
        email: email,
        password: password
    });
}

export const createEvent = (eventName, eventDescription,eventDateTime) => {
    db.ref('/users/events').push({
        eventName: eventName,
        eventDescription: eventDescription,
        eventDateTime: eventDateTime

    })
}