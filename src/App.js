import './App.css';
import React, { useState, useEffect } from 'react';
import Mobile from './pages/Mobile';
import Home from './pages/Home';


function App() {

  const [zineData, setZineData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwtGnqrpludp6jR01qlD539CMQW-GozsN6IHGNUe-aAq8Ld8AFTzExY2pBnIbc4hVus/exec');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setZineData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
        <div className='mobile'>
          {zineData && <Mobile></Mobile>}
        </div>
        <div className='home'>
          {zineData && <Home zineData={zineData}></Home>}
        </div>
    </div>
  );
}

export default App;
