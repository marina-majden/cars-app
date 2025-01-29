// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCBDVgENL7LVACWcj8W6dVkfoMSKann1rE",
	authDomain: "vehicle-managment-e0a67.firebaseapp.com",
	projectId: "vehicle-managment-e0a67",
	storageBucket: "vehicle-managment-e0a67.firebasestorage.app",
	messagingSenderId: "629456607812",
	appId: "1:629456607812:web:c3c96fbc954d2dccb8fa11",
	measurementId: "G-SV9BN8EYNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
