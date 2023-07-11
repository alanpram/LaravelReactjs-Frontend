import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Navbar from './component/home/NavbarComponent';
import Banner from './component/home/BannerComponent';

function App() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5174/api/banner');
        setBanners(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      <Navbar/>

      <div className="swiper-banner">
        <Banner banners={banners} />
      </div>

    </div>
  );
}

export default App;
