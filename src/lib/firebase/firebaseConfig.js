// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { env } from '$env/dynamic/public';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: env.PUBLIC_API_KEY,
	authDomain: 'nad-labs-site-54d1b.firebaseapp.com',
	projectId: 'nad-labs-site-54d1b',
	storageBucket: 'nad-labs-site-54d1b.appspot.com',
	messagingSenderId: env.PUBLIC_messagingSenderId,
	appId: env.PUBLIC_appID,
	measurementId: env.PUBLIC_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
