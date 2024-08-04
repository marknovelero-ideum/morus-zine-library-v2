import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.js'
import Morus from '../assets/fonts/morus.png'
import Comic1 from '../assets/fonts/united.jpg'
import Runner from '../assets/fonts/runner.png'
import Collections from '../assets/fonts/morus-records.jpg'
import Flag from '../assets/fonts/flag.png'
import Point from '../assets/fonts/right.svg'
import './about.css'
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';

export default function Home( {toAbout, toCollection,current, setCurrent}) {
  
  const [screenSize, setScreenSize] = useState(0);
  
  useEffect(() => {
    // Function to update screenSize with the screen's width resolution
    const updateScreenSize = () => {
      setScreenSize(window.screen.width);
    };

    // Call the function to set the initial value
    updateScreenSize();

  }, []); 

 

  return (
    <main>
      <Navbar toAbout={toAbout} toCollection={toCollection} current={current} setCurrent={setCurrent}></Navbar>
  
      {/* start of about code */}
      <motion.article 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: .25, duration: 1}}
        className="about-top">
          <container className="sect1-container">
            <section className="para-1">
              <div className='container-img-1'>
                <div className='container-label-sub'>
                  <div 
                    className='les-div'>
                    <h2 className='lower-east'>LOWER <br></br> EAST SIDE</h2>
                  </div>
                  <img alt='Comic strip by Seth Tobocomann' className='united-img' src={Comic1}></img>
                  <p className='attribution'>Art by Seth Tobachmann</p>
                </div>
              </div>
              <div className='para1-subdiv'>
                <img className='flag-img' alt="Man holding a flag" src={Flag}></img>
                    <p className="para-1-text">
                      The Museum of Reclaimed Urban Space Zine Library was created to support the museum’s mission of preserving and
                      promoting the history of grassroots activism in the Lower East Side of Manhattan. This library elevates and 
                      makes accessible the oftentimes disenfranchised and marginalized voices represented through these typically 
                      free publications. First organized in 2021 by the Archive Committee at MoRUS, the MoRUS Zine Library was made 
                      up of donations from visitors and former museum volunteers. Moving forward the scope of our zine collection 
                      policy will be focused on subjects and genres ranging from DIY, history, and art that deal with topics like 
                      housing, environmentalism, and activism, especially those emanating from New York City. Despite these 
                      collection restrictions, the library will continue to reflect the diverse communities of stakeholders concerned
                      with each of these topics. 
                    </p>
              </div>
            </section>
          </container>
          <div className='container-of-decodivs'>
            <div className="deco-div-1">
              <h2 className='activism'>ACTIVISM!</h2>
            </div>
            <div className="deco-div-3"></div>
          </div>
          <div className='sect2-container'>
            <p className="para-2-text">
              While our physical collection currently tops out at about 100 different zines (and will continue to grow) this 
              digital repository provides a selection of those zines. The MoRUS Zine Library is made up largely of donations. 
              If you see your work featured in the library and wish to be more clearly credited, removed from the library, or 
              the documentation of the zine changed in any way please don't hesitate to reach out to the archive coordinator. 
              Other zines can be made available by reaching out to the archive coordinator at archives@morusnyc.org or 
              info@morusnyc.org.    
            </p>
            <div className='deco-div-2'>
              <img className='runner-img' alt="Runner" src={Runner}></img>
            </div>
            <a className='history-link' href="http://www.morusnyc.org/" target='_blank' rel="noreferrer">
              <img className='history-museum' alt="MORUS museum" src={Morus}></img>
              <p className='address'>NEIGHBORHOOD <br></br> MUSEUM</p>
            </a>
          </div>
          <div className="deco-div-4"/>
          <div className="sect3-container">
            <div className="deco-div-5">
              <h2 className='grassroots'><span className='grass'>GRASS</span><span className='roots'>ROOTS</span></h2>
            </div>
            <div className="deco-div-6"></div>
          </div>
          <div className='sect4-container'>
              <div className='collections-div'>
                <img className='collections' alt="Collections team of MORUS" src={Collections}></img>
                <h2 className='community'>READ CREATE & DONATE</h2>
              </div>
              <p className='para-3-text'>
              The Zine Library is organized according to subject in our database which uses the xZineCorex metadata schema, 
              explained by Milo of QZAP in an easy to read and very helpful zine here, and the subject terms were derived 
              largely from the Anchor Archive Zine Subject Thesaurus. The goal of our adherence to these zine specific 
              standards is to contribute to the ongoing project of Zine Union Catalog to normalize metadata in libraries 
              around the world. Long term we hope to participate in the ongoing project of creating a worldwide open source 
              catalog of zines which can connect any library that holds zines. More details on that project at here at zinecat.org.
              </p>
          </div>
          <div className='end'>
            <div className='tools-div'></div>
            <h2 className='end-text' onClick={()=> toCollection()}>ZINES</h2>
            <img className='point' src={Point}></img>
          </div>
      </motion.article>
      
    </main>
  )
}
