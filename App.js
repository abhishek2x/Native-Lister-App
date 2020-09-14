import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NotesScreenComponent from "./src/NotesScreenComponent";
import firebase from "firebase";
import LoginScreenComponent from "./src/LoginScreenComponent";

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  if (firebase.apps.length === 0) {
    var firebaseConfig = {
      apiKey: "AIzaSyCIQx_B3fKhYsvsC0X1zPMO8QgtQzrXoRs",
      authDomain: "mobile-todo-app-4082b.firebaseapp.com",
      databaseURL: "https://mobile-todo-app-4082b.firebaseio.com",
      projectId: "mobile-todo-app-4082b",
      storageBucket: "mobile-todo-app-4082b.appspot.com",
      messagingSenderId: "587957180762",
      appId: "1:587957180762:web:c784b48588a6b7bbf33b63",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      setUserLoggedIn(false);
    } else {
      setUserLoggedIn(true);
    }
  });

  if (userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6e0e2",
    alignItems: "center",
    justifyContent: "center",
  },
});
