const firebaseConfig = {
    apiKey: "AIzaSyAUymuyXCsdRTL0NWfaogd8UtfupbOQ8y0",
    authDomain: "portofolio-contact-page.firebaseapp.com",
    databaseURL: "https://portofolio-contact-page-default-rtdb.firebaseio.com",
    projectId: "portofolio-contact-page",
    storageBucket: "portofolio-contact-page.appspot.com",
    messagingSenderId: "571308773262",
    appId: "1:571308773262:web:d716150ee25d1d050a9edf"
  };
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");

    saveMessages(name,email,subject,message);
}

const saveMessages = (name,email,subject,message) => { 
      var newContactForm = contactFormDB.push();
      newContactForm.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
};

const getElementVal = (name) => {
  return document.getElementById(name).value;
};