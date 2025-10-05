import { useRef } from 'react';
import "./Entertainment.css";
import { Dramas, Miscellaneous, Radio, SoloUnit } from '../../models/ent';

function Entertainment() {
  const dramaRef = useRef(null);
  const soloUnitRef = useRef(null);
  const radioRef = useRef(null);
  const miscRef = useRef(null);


  function scrollLeft(ref) {
    ref.current?.scrollBy({ left: -320, behavior: 'smooth' });
  }
  function scrollRight(ref) {
    ref.current?.scrollBy({ left: 320, behavior: 'smooth' });
  }

  return (
    <>
      <div className="main">
        <div className="side-nav">
          <h1>Entertainment</h1>
        </div>
        <p>Check out all the shows featuring VERIVERY, including variety shows, dramas, and radio programs. 
          See the group’s fun side and get to know more about their personalities </p>
      </div >

      {/* content */}
      <div className="ent-content">
        <h2>Group Content</h2>
        <div className="slider-wrapper">
          <button className="arrow left-arrow" onClick={() => scrollLeft(miscRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>

          <div className="card-container content-cards" ref={miscRef}>
            {Miscellaneous.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.name} />
                    <p className='overlay-title content-title'>{v.name}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={() => scrollRight(miscRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>

      {/* solo/unit */}
      <div className="ent-content">
        <h2>Solo/Unit Content</h2>
        <div className="slider-wrapper">
          <button className="arrow left-arrow" onClick={() => scrollLeft(soloUnitRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>

          <div className="card-container content-cards" ref={soloUnitRef}>
            {SoloUnit.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.name} />
                    <p className='overlay-title content-title'>{v.name}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={() => scrollRight(soloUnitRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>

      {/* drama */}
      <div className="ent-content">
        <h2>Dramas</h2>
        <div className="slider-wrapper">
          {/* <button className="arrow left-arrow" onClick={() => scrollLeft(dramaRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button> */}

          <div className="card-container content-cards" ref={dramaRef}>
            {Dramas.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.name} />
                    <p className='overlay-title content-title'>{v.name}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          {/* <button className="arrow right-arrow" onClick={() => scrollRight(dramaRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button> */}
        </div>
      </div>

      {/* radio */}
      <div className="ent-content">
        <h2>Radio Shows</h2>
        <div className="slider-wrapper">
          {/* <button className="arrow left-arrow" onClick={() => scrollLeft(radioRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button> */}

          <div className="card-container content-cards" ref={radioRef}>
            {Radio.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.name} />
                    <p className='overlay-title content-title'>{v.name}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          {/* <button className="arrow right-arrow" onClick={() => scrollRight(radioRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button> */}
        </div>
      </div>
    </>
  )
}

export default Entertainment;