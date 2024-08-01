import './App.css';
import React, { useState, useEffect } from 'react';
import Mobile from './pages/Mobile';
import Home from './pages/Home';
import Collection from './pages/Collection'
import { Routes, Route, useNavigate } from "react-router-dom";



function App() {

  const navigate = useNavigate();
  const [zineData, setZineData] = useState(null)
  const [current, setCurrent] = useState('')

  const toCollection = () => {
    const newValue = 'collection';
    sessionStorage.setItem('header-value', newValue);
    setCurrent(newValue);
    navigate(`/${newValue}`)
  };

  const toAbout = () => {
    const newValue = '';
    sessionStorage.setItem('header-value', newValue);
    setCurrent(newValue);
    navigate(`/${newValue}`)
  };

  useEffect(() => {

    const headerValue = sessionStorage.getItem('header-value') || '';
    setCurrent(headerValue);

    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwtGnqrpludp6jR01qlD539CMQW-GozsN6IHGNUe-aAq8Ld8AFTzExY2pBnIbc4hVus/exec');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
         // Sort data in descending order based on interface_id field
         const sortedData = data.sort((a, b) => b.interface_id - a.interface_id);
        setZineData(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
        {zineData && 
          <Routes>
            <Route index element={<Home toAbout={toAbout} toCollection={toCollection} zineData={zineData} current={current} setCurrent={setCurrent}/>} />
            <Route path="/collection" element={<Collection toAbout={toAbout} toCollection={toCollection} zineData={zineData} current={current} setCurrent={setCurrent}/>} />
          </Routes>
        }
    </div>
  );
}

export default App;
