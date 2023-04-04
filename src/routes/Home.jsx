import Banner from '../components/Banner'
import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList';
import { AuthProvider } from '../context/AuthContext';
import { AuctionBody } from '../components/auctions/Body';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import BuyHouseList from '../components/buy and sell/buyhouselist';

const Home = () => {
  return (
    <>
      <Header/>
      <Banner /> 
      <BuyHouseList/>
    </>
  )
}

export default Home;
