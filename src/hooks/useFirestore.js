import { useEffect, useState } from 'react';
import { firestoreApp } from '../utils/firebase';

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const subscribe = firestoreApp.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        let a = { ...doc.data(), id: doc.id };
        documents.push(a);
        
      });
      setDocs(documents);
      localStorage.setItem("housedata", JSON.stringify(documents));
    });

    return () => subscribe();
  }, [collection]);

  return { docs };
};
