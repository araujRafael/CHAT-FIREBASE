import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

//
let firebaseConfig: any;
if (import.meta.env.VITE_MODE === "dev") {
  firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  };
} else {
  firebaseConfig = {
    apiKey: process.env.VITE_API_KEY,
    authDomain: process.env.VITE_AUTH_DOMAIN,
    projectId: process.env.VITE_PROJECT_ID,
    storageBucket: process.env.VITE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_APP_ID,
    measurementId: process.env.VITE_MEASUREMENT_ID,
  };
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export { firebase };
export const storage = firebase.storage();
export const db = firebase.firestore();
export const auth = firebase.auth();
// Functions
export function addDocInDb(col: string, data: object) {
  try {
    const docRef = db.collection(col).add(data);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
export async function readDocInDb(col: string) {
  const querySnap = await db.collection(col).get();
  return querySnap;
}
// Sub
export async function addSubDocInDb(
  col: string,
  id: string,
  sub: string,
  data: object
) {
  try {
    const docRef = await db.collection(col).doc(id).collection(sub).add(data);
    return docRef;
  } catch (error) {
    console.error("Error adding subDoc document: ", error);
  }
}
export async function updateSubDocInDb(
  col: string,
  colId: string,
  sub: string,
  id: string,
  data: object
) {
  try {
    const docRef = await db
      .collection(col)
      .doc(colId)
      .collection(sub)
      .doc(id)
      .update(data);
    return docRef;
  } catch (error) {
    console.error("Error update subDoc document: ", error);
  }
}
export async function deleteSubDocInDb(
  col: string,
  colId: string,
  sub: string,
  id: string
) {
  try {
    const docRef = await db
      .collection(col)
      .doc(colId)
      .collection(sub)
      .doc(id)
      .delete();
    return docRef;
  } catch (error) {
    console.error("Error update subDoc document: ", error);
  }
}
export function listeningDocInDb(col: string, colId: string, sub: string) {
  const querySnap = db.collection(col).doc(colId).collection(sub);
  return querySnap;
}
