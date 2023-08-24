// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB655NjEXLVMzYNH2joSvo6y2p6wMlvnS4",
//     authDomain: "wavma-security.firebaseapp.com",
//     projectId: "wavma-security",
//     storageBucket: "wavma-security.appspot.com",
//     messagingSenderId: "908403361999",
//     appId: "1:908403361999:web:ce22b67778f674b7230fba",
//     measurementId: "G-G6WSXLJNWD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const modalForm = document.querySelector('.modal-form');

// const senderName = modalForm.querySelector('#sender-name');
// const individual = modalForm.querySelector('#individual');
// const institution = modalForm.querySelector('#institution');
// const senderTelephone = modalForm.querySelector('#sender-telephone');
// const senderEmail = modalForm.querySelector('#sender-email');
// const senderAddress = modalForm.querySelector('#sender-address');
// const guardsNumber = modalForm.querySelector('#guards-number');
// const permanent = modalForm.querySelector('#permanent');
// const events = modalForm.querySelector('#events');
// const escort = modalForm.querySelector('#escort');
// const k9 = modalForm.querySelector('#k9');
// const messageText = modalForm.querySelector('#message-text');


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

const messaging = getMessaging(firebaseConfig);
messaging.getToken({vapidKey: "BAhUE5eKqcT0mw3w10e1HGXojpW7W-1qhRfjbktS4HsEYSiMoPXY_whuuuo96qp8CYGiSL9qiAhfQ4Lk40fiQDU"});
// onMessage(messaging, (payload) => {
//   console.log('Message received. ', payload);
// });

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

// if (modalForm) {
//     modalForm.addEventListener('submit', function (evt) {
//         evt.preventDefault();
//         firebasePush(senderName);
//         firebasePush(individual);
//         firebasePush(institution);
//         firebasePush(senderTelephone);
//         firebasePush(senderEmail);
//         firebasePush(senderAddress);
//         firebasePush(guardsNumber);
//         firebasePush(permanent);
//         firebasePush(events);
//         firebasePush(escort);
//         firebasePush(k9);
//         firebasePush(messageText);
//         console.log('Success');
//         return alert('Quote Successful! Thank You!')
//     })
// }

// if (!firebase.apps.length) {

var config = {
    apiKey: "AIzaSyB655NjEXLVMzYNH2joSvo6y2p6wMlvnS4",
    authDomain: "wavma-security.firebaseapp.com",
    databaseURL: "https://wavma-security-default-rtdb.firebaseio.com",
    projectId: "wavma-security",
    storageBucket: "wavma-security.appspot.com",
    messagingSenderId: "908403361999",
    appId: "1:908403361999:web:ce22b67778f674b7230fba",
    measurementId: "G-G6WSXLJNWD"
};
firebase.initializeApp(config);
    // }

var quoteRef = firebase.database().ref('Quotes');

document.getElementById('modalForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    // var modalForm = document.querySelector('.modal-form');

    var senderName = getInputVal('sender-name');
    var individualInstitution = getInputVal('individual-institution');
    var senderTelephone = getInputVal('sender-telephone');
    var senderEmail = getInputVal('sender-email');
    var senderAddress = getInputVal('sender-address');
    var guardsNumber = getInputVal('guards-number');
    var permanent = getInputVal('permanent');
    var events = getInputVal('events');
    var escort = getInputVal('escort');
    var k9 = getInputVal('k9');
    var messageText = getInputVal('message-text');

    saveQuote(
        senderName,
        individualInstitution,
        senderTelephone,
        senderEmail,
        senderAddress,
        guardsNumber,
        permanent,
        events,
        escort,
        k9,
        messageText,
    );

    document.querySelector('.modal-alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.modal-alert').display = 'none';
    }, 3000);

    document.getElementById('modalForm').reset();

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveQuote(
    senderName,
    individualInstitution,
    senderTelephone,
    senderEmail,
    senderAddress,
    guardsNumber,
    permanent,
    events,
    escort,
    k9,
    messageText,

){
    var newQuoteRef = quoteRef.push();
    newQuoteRef.set({
    senderName: senderName,
    individualInstitution: individualInstitution,
    senderTelephone: senderTelephone,
    senderEmail: senderEmail,
    senderAddress: senderAddress,
    guardsNumber: guardsNumber,
    permanent: permanent,
    events: events,
    escort: escort,
    k9: k9,
    messageText: messageText, 
    });
}