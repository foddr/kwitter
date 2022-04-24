
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA0gQ5eU8PC-g4xkiw38TjscNzLRqdCV1I",
      authDomain: "kwitter-e5921.firebaseapp.com",
      databaseURL: "https://kwitter-e5921-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5921",
      storageBucket: "kwitter-e5921.appspot.com",
      messagingSenderId: "578734865226",
      appId: "1:578734865226:web:3064d4de87722db8a1dfb3",
      measurementId: "G-778N1T6F5T"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
