import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import Morus from '../assets/fonts/morus.png'
import PointR from '../assets/fonts/illus-1.png'
import './home.css'

export default function Home(zineData) {
  const [current, setCurrent] = useState('about')

  return (
    <main>
      <Navbar current={current} setCurrent={setCurrent}></Navbar>
      <article className="about-top">
        <container className="para-1-container">
          <section className="para-1">
            <div className='container-label-1'>
              <div className='container-label-sub'>
                <img className='bike-img' src={PointR}></img>
              </div>
            </div>
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
          </section>
        </container>
        <div className="deco-div-1"></div>
        <div className='img-1-container'>
          <p className="para-2-text">
            While our physical collection currently tops out at about 100 different zines (and will continue to grow) this 
            digital repository provides a selection of those zines. The MoRUS Zine Library is made up largely of donations. 
            If you see your work featured in the library and wish to be more clearly credited, removed from the library, or 
            the documentation of the zine changed in any way please don't hesitate to reach out to the archive coordinator. 
            Other zines can be made available by reaching out to the archive coordinator at archives@morusnyc.org or 
            info@morusnyc.org.    
          </p>
          <div className='deco-div-2'></div>
          <img className='img-1' src={Morus}></img>
        </div>
      </article>
     
    </main>
  )
}
