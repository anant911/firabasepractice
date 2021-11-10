var firebaseConfig = {
    apiKey: "AIzaSyCXnzOmFYv348xX4qtv2w0JFK6UVldX2ec",
    authDomain: "fir-thing-b5f4f.firebaseapp.com",
    databaseURL: "https://fir-thing-b5f4f-default-rtdb.firebaseio.com",
    projectId: "fir-thing-b5f4f",
    storageBucket: "fir-thing-b5f4f.appspot.com",
    messagingSenderId: "201888047237",
    appId: "1:201888047237:web:a786f8b9fc00f4783689ec"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser()
{

    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user"});
}