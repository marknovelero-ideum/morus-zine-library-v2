export default function Collection( { toCollection, toAbout, zineData, current, setCurrent}) {

    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedZine, setSelectedZine] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isOpen, setIsOpen] = useState(false);
    
    const zinesPerPage = 40;
    const location = useLocation();
  
    useEffect(() => {
      // Scroll to the top of the page when this component mounts
      window.scrollTo(0, 0);
    }, [location]);
  
    useEffect(() => {
      // Scroll to the top of the page when the page changes
      setTimeout(() => {
          window.scrollTo(0, 0);
      }, 900)
    }, [currentPage]);
  
  
    // Calculate the indices of the zines to display on the current page
    const filteredZines = selectedCategory === 'All'
      ? zineData
      : zineData.filter(zine => zine.Subject === selectedCategory);
    const indexOfLastZine = currentPage * zinesPerPage;
    const indexOfFirstZine = indexOfLastZine - zinesPerPage;
    const currentZines = filteredZines.slice(indexOfFirstZine, indexOfLastZine);
  
    // Function to handle page change
    const handlePageChange = (pageNumber) => {
       setCurrentPage(pageNumber);
    };
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredZines.length / zinesPerPage);
  
    //Open overlay for zine metadata
    const openOverlay = (zineData) => {
      setSelectedZine(zineData)
      setShowOverlay(true)
    }
  
    // Prevent click from closing the overlay
    const handleFrameClick = (e) => {
      e.stopPropagation(); 
    };
  
    // Handle category change
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
      setCurrentPage(1); // Reset to the first page when category changes
    };
  
    return (
      <div className='top-div'>
      {/* Dropdown menu for category selection */}
        <div className='dropdown-menu'>
          <p className='filter-by'>Filter By Subject: </p>
          <select className='filter' value={selectedCategory} onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)} onChange={handleCategoryChange}>
            <option className='option' value="All">All</option>
            <option className='option' value="Activism">Activism</option>
            <option className='option' value="Anarchism">Anarchism</option>
            <option className='option' value="Art">Art</option>
            <option className='option' value="Bicycles">Bicycles</option>
            <option className='option' value="Climate Change">Climate Change</option>
            <option className='option' value="Community">Community</option>
            <option className='option' value="DIY">DIY</option>
            <option className='option' value="Environmentalism">Environmentalism</option>
            <option className='option' value="Feminism">Feminism</option>
            <option className='option' value="Gardening">Gardening</option>
            <option className='option' value="History">History</option>
            <option className='option' value="Housing">Housing</option>
            <option className='option' value="Labor">Labor</option>
            <option className='option' value="Politics">Politics</option>
            <option className='option' value="Prisons">Prisons</option>
            <option className='option' value="Race">Race</option>
            <option className='option' value="Squatting">Squatting</option>
            <option className='option' value="Surveillance">Surveillance</option>
          </select>
        </div>
          <AnimatePresence>
              <motion.div
                  key={currentPage}
                  exit={{opacity:0}}
                  className="zine-grid">
                  {currentZines.map((zineData, index) => (
                      <motion.div 
                      initial={{y: 800}}
                      animate={{y: 0}}
                      transition={{delay: .5, duration: 1.25}} >
                          <div className="zine-item">
                              <a href={zineData.pdf_link} target="_blank" rel="noopener noreferrer">
                                  <img className="zine-img" src={zineData.image} alt={zineData.title}/>
                                  <div className='frame'>
                                      <div className='auth-title-div'>
                                          <h2 className='title-text'>{zineData.Title}</h2>
                                          <h3 className='author'>{zineData.Creator}</h3>
                                      </div>
                                  </div>
                              </a>
                          </div> 
                          <button onClick={() => openOverlay(zineData)} className='meta-btn'>View Metadata &#8594;</button> 
                      </motion.div>
                  ))}
              </motion.div>
          </AnimatePresence>
          <AnimatePresence>
          {showOverlay && selectedZine && (
          <motion.div
              initial={{y: -1500}}
              animate={{y: 0}}
              transition={{delay: .25, duration: 1}}
              exit={{opacity: 0}}
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
        </AnimatePresence>
              {/* Pagination Controls */}
              <div className="pagination">
                  <div className="sub-pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                      <button key={index} onClick={() => handlePageChange(index + 1)}
                              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}>
                          {index + 1}
                      </button>
                  ))}
                  </div>
              </div>
      </div>
    )
  }
  