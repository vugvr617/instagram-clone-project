import { auth, database } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";

export const signUp = (data, errorCallback) => {
  const { email, password, username, fullName } = data;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      const userDoc = doc(database, "users", uid);
      const userData = {
        email: email.toLowerCase(),
        password: password,
        fullName: fullName,
        username: username.toLowerCase(),
      };
      setDoc(userDoc, userData);
    })
    .catch((error) => {
      errorCallback(error.message);
    });
};

export const signIn = (data, errorCallback) => {
  const { email, password } = data;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return errorCallback(error.message);
    });
};

export const isUsernameExists = async (username) => {
  const usersQuery = query(
    collection(database, "users"),
    where("username", "==", username)
  );

  const querySnapshot = await getDocs(usersQuery);

  console.log(querySnapshot);

  console.log(querySnapshot.size);

  return querySnapshot.size > 0;
};
