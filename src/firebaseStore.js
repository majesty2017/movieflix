import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAG3J8LN-l3vd7L6qc5PU_ehTqVa5l-dlw',
  authDomain: "supreme-movieflix.firebaseapp.com",
  projectId: "supreme-movieflix",
  storageBucket: "supreme-movieflix.appspot.com",
  messagingSenderId: "516025865369",
  appId: "1:516025865369:web:106264acc998e2af589408"
};

const app =  initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth()

const addUser = async data => {
  const dbInstance = await collection(db, 'users')
  return await addDoc(dbInstance, data)
}

const addPayment = async data => {
  const dbInstance = collection(db, 'payments')
  return addDoc(dbInstance, data)
}

const getPlans = async () => {
  const docInstance = await collection(db, 'plans')
  return await getDocs(docInstance)
}

export {
  auth, 
  addUser, 
  addPayment, 
  getPlans
}

export default db;