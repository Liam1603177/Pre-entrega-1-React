import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAO0w5QOKGf6l5TdImIJB0aeM4db1__y-s",
  authDomain: "tienda-flow.firebaseapp.com",
  projectId: "tienda-flow",
  storageBucket: "tienda-flow.firebasestorage.app",
  messagingSenderId: "468164197680",
  appId: "1:468164197680:web:c9857eb2fdcecaae579cf5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);