import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export const useGetAllProducts = (collectionName) => {
  const [loading, setLoading] = useState(true);
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const collectionItem = collection(db, collectionName);
    getDocs(collectionItem).then((snapshot) => {
      setItems(
      snapshot.docs.map((doc) => (
        { id: doc.id,
          ...doc.data()
        }
      ))
    );
    }).catch((error) => console.error(error)).finally(() => setLoading(false));
  }, []);

  return { loading, Items };
};