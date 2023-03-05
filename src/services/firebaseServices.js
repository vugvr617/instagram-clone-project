import { auth, database } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
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

export const isUsernameExists = async (username) => {
  const usersQuery = query(
    collection(database, "users"),
    where("username", "==", username)
  );

  const querySnapshot = await getDocs(usersQuery);

  return querySnapshot.size > 0;
};
