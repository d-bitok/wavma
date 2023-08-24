'use strict'

const subscribe = document.querySelector('.subscribe-email');
const inputEmail = subscribe.querySelector('#subscribeEmail');

const firebaseConfig = {
    apiKey: "AIzaSyB655NjEXLVMzYNH2joSvo6y2p6wMlvnS4",
    authDomain: "wavma-security.firebaseapp.com",
    databaseURL: "https://wavma-security-default-rtdb.firebaseio.com",
    projectId: "wavma-security",
    storageBucket: "wavma-security.appspot.com",
    messagingSenderId: "908403361999",
    appId: "1:908403361999:web:ce22b67778f674b7230fba",
    measurementId: "G-G6WSXLJNWD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function firebasePush(input) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const emailRef = firebase.database().ref('Subscription').push().set(
        {
            Subscriber: input.value
        }
    );
}

if (subscribe) {
    subscribe.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail);
        console.log('Success');
        return alert('Subscribed Successfully! Thank You!')
    })
}
