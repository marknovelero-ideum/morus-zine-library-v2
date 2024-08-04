import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import './collection.css'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';



export default function Collection( { toCollection, toAbout, zineData, current, setCurrent}) {

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedZine, setSelectedZine] = useState(null);

  const openOverlay = (zineData) => {
    setSelectedZine(zineData)
    setShowOverlay(true)
  }

  const handleFrameClick = (e) => {
    e.stopPropagation(); // Prevent click from closing the overlay
  };

  const location = useLocation();
  useEffect(() => {
    // Scroll to the top of the page when this component mounts
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='top-div'>
        <Navbar toAbout={toAbout} toCollection={toCollection} current={current} setCurrent={setCurrent}></Navbar>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: .25, duration: 1}} 
            className="zine-grid">
            {zineData.map((zineData, index) => (
                <div>
                    <div key={index} className="zine-item">
                        <a href={zineData.pdf_link} target="_blank" rel="noopener noreferrer">
                            <img className="zine-img" src={zineData.image} alt={zineData.title}/>
                            <div className='frame'>
                                <h2 className='title-text'>{zineData.Title}</h2>
                                <h3 className='author'>{zineData.Creator}</h3>
                            </div>
                        </a>
                    </div> 
                    <button onClick={() => openOverlay(zineData)} className='meta-btn'>View Metadata &#8594;</button> 
                </div>
            ))}
        </motion.div>
        {showOverlay && selectedZine && (
        <motion.div
            initial={{y: -1500}}
            animate={{y: 0}}
            transition={{delay: .25, duration: 1}}
            className="overlay" onClick={() => setShowOverlay(false)}>
            <motion.div 
                className="overlay-frame" 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5, duration: .75}}
                onClick={handleFrameClick}>
                    <h3 className='zine-title'>{selectedZine.Title}</h3>
                    <div className='col-data-div'>
                        <div className='data-div'>
                            <p className='metadata'><span className='data-cat'>Creators:</span> {selectedZine.Creator}</p>
                            <p className='metadata'><span className='data-cat'>Content:</span> {selectedZine.Content_Description}</p>
                            <p className='metadata'><span className='data-cat'>Identifier:</span> {selectedZine.Identifier}</p>
                            <p className='metadata'><span className='data-cat'>Year:</span> {selectedZine.Date_of_Publication}</p>
                            <p className='metadata'><span className='data-cat'>Subject:</span> {selectedZine.Subject}</p>
                            <p className='metadata'><span className='data-cat'>Language:</span> {selectedZine.Language}</p>
                            <p className='metadata'><span className='data-cat'>Coverage:</span> {selectedZine.Coverage}</p>
                            <p className='metadata'><span className='data-cat'>Contributor(s):</span> {selectedZine.Contributor}</p>
                            <p className='metadata'><span className='data-cat'>Publisher:</span> {selectedZine.Publisher}</p>
                            <p className='metadata'><span className='data-cat'>Place of Publication:</span> {selectedZine.Place_of_Publication}</p>
                            <p className='metadata'><span className='data-cat'>Physical Description:</span> {selectedZine.Physical_Description}</p>
                        </div>
                        <div className='img-div'>
                            <img className='card-img' alt={selectedZine.Title} src={selectedZine.image}></img>
                            <button className='card-btn' onClick={() => window.open(selectedZine.pdf_link, '_blank')}>View Zine &#8594;</button>
                        </div>
                    </div>
            </motion.div>
        </motion.div>
      )}
    </div>
  )
}
