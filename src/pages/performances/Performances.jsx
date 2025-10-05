import { useRef } from 'react';
import { Perfs, Encores } from '../../models/perfs';

import "./Perfomances.css";

function Performances() {

  const perfRef = useRef(null);
  const encRef = useRef(null);

  function scrollLeft(ref) {
    ref.current?.scrollBy({ left: -320, behavior: 'smooth' });
  }
  function scrollRight(ref) {
    ref.current?.scrollBy({ left: 320, behavior: 'smooth' });
  }

  return (
    <>
      {/* main title */}
      < div className="main" >
        <div className="side-nav">
          <h1>Perfomances</h1>
        </div>
        <p>Watch VERIVERY's perfomances on music shows, dance practices, kcon, road to kingdom, encores and more</p>
      </div >

      {/* perfomances */}
      <div className="perf-content">
        <h2>Performances</h2>
        <div className="slider-wrapper">
          <button className="arrow left-arrow" onClick={() => scrollLeft(perfRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>

          <div className="card-container content-cards" ref={perfRef}>
            {Perfs.map(v => (
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
          <button className="arrow right-arrow" onClick={() => scrollRight(perfRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>

      {/* encores */}
      <div className="perf-content">
        <h2>Encores</h2>
        <div className="slider-wrapper">
          {/* <button className="arrow left-arrow" onClick={() => scrollLeft(perfRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button> */}

          <div className="card-container content-cards" ref={encRef}>
            {Encores.map(v => (
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
          {/* <button className="arrow right-arrow" onClick={() => scrollRight(perfRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button> */}
        </div>
      </div>
    </>

  )
}

export default Performances;