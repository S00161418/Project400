import { db } from './Database';

export const addUser =  (email,password,userName,confirmPass) => {
    db.ref('/users').push({
        email: email,
        password: password,
        userName: userName,
        confirmPass: confirmPass
    });
}

export const createEvent = (eventName, eventDescription,eventDateTime) => {
    db.ref('/users/events').push({
        eventName: eventName,
        eventDescription: eventDescription,
        eventDateTime: eventDateTime

    })
}