import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import './home.css'

export default function Home(zineData) {
  const [current, setCurrent] = useState('about')

  return (
    <div>
      <Navbar current={current} setCurrent={setCurrent}></Navbar>
      <div className='about-container'>
        <div className='para-div-1'>
          <p className='paragraph-one'>
          The Museum of Reclaimed Urban Space Zine Library was created to support the museum’s mission of preserving 
          and promoting the history of grassroots activism in the Lower East Side of Manhattan. This library elevates 
          and makes accessible the oftentimes disenfranchised and marginalized voices represented through these typically 
          free publications. First organized in 2021 by the Archive Committee at MoRUS, the MoRUS Zine Library was made up 
          of donations from visitors and former museum volunteers. Moving forward the scope of our zine collection policy 
          will be focused on subjects and genres ranging from DIY, history, and art that deal with topics like housing, 
          environmentalism, and activism, especially those emanating from New York City. Despite these collection restrictions, 
          the library will continue to reflect the diverse communities of stakeholders concerned with each of these topics. 
          </p>
        </div>
        <div className='deco-accent'></div>
        <div className='pd2-container'>
          <div className='para-div-2'>
            <p className='paragraph-two'>
              While our physical collection currently tops out at about 100 different zines (and will continue to grow) this digital 
              repository provides a selection of those zines. The MoRUS Zine Library is made up largely of donations. If you see your 
              work featured in the library and wish to be more clearly credited, removed from the library, or the documentation of the 
              zine changed in any way please don't hesitate to reach out to the archive coordinator. Other zines can be made available 
              by reaching out to the archive coordinator at archives@morusnyc.org or info@morusnyc.org.
            </p>
          </div>
        </div>
        <div className='pd3-container'>
          <div className='para-div-3'>
            <p className='paragraph-three'>
            The Zine Library is organized according to subject in our database which uses the xZineCorex metadata schema, explained 
            by Milo of QZAP in an easy to read and very helpful zine here, and the subject terms were derived largely from the Anchor 
            Archive Zine Subject Thesaurus. The goal of our adherence to these zine specific standards is to contribute to the ongoing 
            project of Zine Union Catalog to normalize metadata in libraries around the world. Long term we hope to participate in the 
            ongoing project of creating a worldwide open source catalog of zines which can connect any library that holds zines. More 
            details on that project at here at zinecat.org.
            </p>
          </div>
        </div>
        <div className='deco-accent-two'></div>
      </div>
    </div>
  )
}
