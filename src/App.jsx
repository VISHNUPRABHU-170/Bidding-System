import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
import { AuthProvider } from './context/AuthContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import SignUp from './components/sign-up/sign-up'
import SignIn from './components/sign-in/sign-in'
import { NavComp } from './authentication/NavComp';
import { AuctionBody } from './components/auctions/Body';
import Buy from './components/buy and sell/buy';
import Sell from './components/buy and sell/sell';

const App = () => {
  return (
    <HouseProvider>

      <AuthProvider>
      <NavComp />

      <Container maxW='container.lg' px='4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='property-details' element={ <PropertyDetails /> } >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route path='/sell' element={<Sell/>} />
          <Route path='/buy' element={<Buy/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path="*"
                element={ <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                          </main>
                        }
          />
        </Routes>
        
     
      
    
      </Container>
      <Footer />
      </AuthProvider>
    </HouseProvider>
  )
}

export default App
