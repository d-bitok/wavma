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
    var other = getInputVal('other');
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
        other,
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
    other,
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
        other: other,
        messageText: messageText, 
    });
}