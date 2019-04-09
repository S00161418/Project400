import { db } from './Database';

export const addUser =  (user,email,password,userName,confirmPass) => {
    db.ref(`/users/${user.uid}/info`).set({
        email: email,
        password: password,
        userName: userName,
        confirmPass: confirmPass
    });
}

export const createEventUser = (user,eventName, eventDescription,eventDateTime) => {
    db.ref(`/users/${user.uid}/events`).push({
        eventName: eventName,
        eventDescription: eventDescription,
        eventDateTime: eventDateTime

    })
}

export const createEvent = (eventName, eventDescription,eventDateTime) => {
    db.ref('/events').push({
        eventName: eventName,
        eventDescription: eventDescription,
        eventDateTime: eventDateTime

    })
}

export const addInterest = (user,interest) => {
    db.ref(`/users/${user.uid}/interest/${interest}`).set({
        intertestName: interest,
    })
}

export const deleteInterest = (user,interest) => {
    db.ref(`/users/${user.uid}/interest/${interest}`).remove({
        intertestName: interest
    })
}