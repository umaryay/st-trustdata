// ST TRUSTDATA — Firebase Configuration

const firebaseConfig = {
apiKey: "AIzaSyA_JXcbQwtFKu8K3LUdLpDoK9rQu8zEpI8",
authDomain: "st-trustdata.firebaseapp.com",
databaseURL: "https://st-trustdata-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "st-trustdata",
storageBucket: "st-trustdata.firebasestorage.app",
messagingSenderId: "738537937475",
appId: "1:738537937475:web:8b9606ace03882e73752f6",
measurementId: "G-8QBNVXBRNQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication
const auth = firebase.auth();

// Firebase Realtime Database
const database = firebase.database();
