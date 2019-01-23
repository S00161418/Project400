import Firebase from 'react-native-firebase';
 let config = {
    apiKey: "AIzaSyAAgONd3_DT8rI4fHOQrvRSzDxgU_e0mE8",
    authDomain: "project400-events-app.firebaseapp.com",
    databaseURL: "https://project400-events-app.firebaseio.com/",
    projectId: "project400-events-app",
    storageBucket: "",
    messagingSenderId: "587551897511"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();