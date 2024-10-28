// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import ShowLaptops from '../ShowLaptops';
import OwnerShopDetails from '../owner/OwnerShopDetails';
import UserAuth from './UserAuth';
import SearchLaptops from './SearchLaptops';
import ShowSmallInfo from './ShowSmallInfo';
import ShowSingleLaptop from './ShowSingleLaptop';
import SearchShops from './SearchShops';
import LaptopFilter from './LaptopFilter';
const UserApp = () => {
  return (
    <Router>
      <div>
        <UserNavBar />
        <Routes>
          <Route exact path="/" element={<ShowSmallInfo/>} />
          <Route exact path="/auth" element={<UserAuth/>} />
          <Route path="/owner-shop-details/:user" element={<OwnerShopDetails />} />
          <Route path="/search" element={<SearchLaptops/>} />
          <Route path="/laptop-data" element={<ShowSingleLaptop/>} />
          <Route path="/search-shop" element={<SearchShops/>} />
          <Route path="filter-laptop" element={<LaptopFilter/>} />
        </Routes>
      </div>
    </Router>
  );
};



export default UserApp;
