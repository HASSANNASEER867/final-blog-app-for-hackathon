  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAeeOaVRrlf0hujfMNcdeqL6ERry7F7RTU",
    authDomain: "blogging-websites-6a594.firebaseapp.com",
    projectId: "blogging-websites-6a594",
    storageBucket: "blogging-websites-6a594.appspot.com",
    messagingSenderId: "811336247231",
    appId: "1:811336247231:web:2faacc325705ee60bea30a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener ("click" ,function(event){
event.preventDefault();
const email = document.getElementById('email').Value;
const password = document.getElementById('password').Value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
 // Signed up 
const user = userCredential.user;
alert("CREATING ACCOUNT")
window.location.href ="index.html"
// ...
 })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("ERROR OCCURS")    // ..
  });

  } )