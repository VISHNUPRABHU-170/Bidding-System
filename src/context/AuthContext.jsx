import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApp, firestoreApp } from '../utils/firebase';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalMsg, setGlobalMsg] = useState('');
  const sellnavigate = useNavigate();
  const register = (email, password) => {
    return authApp.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return authApp.signInWithEmailAndPassword(email, password);
    
  };

  const logout = () => {
    return authApp.signOut();
  };

  const bidAuction = (auctionId, price) => {
    if (!currentUser) {
      return setGlobalMsg('Please login first');
    }

    let newPrice = Math.floor((price / 100) * 110);
    const db = firestoreApp.collection('auctions');
    alert("Your bidding is added to the list successfully")
    return db.doc(auctionId).update({
      curPrice: newPrice,
      curWinner: currentUser.email,
    });
    
  };

  const endAuction = (auctionId) => {
    
    const db = firestoreApp.collection('auctions');
    sellnavigate('/sell')
    return db.doc(auctionId).delete();
  };

  useEffect(() => {
    const subscribe = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return subscribe;
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => setGlobalMsg(''), 5000);
    return () => clearTimeout(interval);
  }, [globalMsg]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        bidAuction,
        endAuction,
        globalMsg,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
