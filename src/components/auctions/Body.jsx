import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { AddAuction } from './AddAuction';
import { AuctionCard } from './AuctionCard';
import { ProgressBar } from './ProgressBar';

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  
  console.log(currentUser);
  return (
    <div className="py-5">
      <div className="container">
        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

        {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

        {currentUser && <AddAuction setAuction={setAuction} />}
      </div>
    </div>
  );
};
