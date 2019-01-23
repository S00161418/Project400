import { db } from '../Services/Database';

export const addUser =  (email,password) => {
    db.ref('/users').push({
        email: email,
        password: password
    });
}