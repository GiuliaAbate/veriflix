import { useRef } from 'react';
import { DIYs, MVs, OSTs, PerfomanceVideos } from "../../models/mvs.ts";
import "./MusicVideos.css";

function MusicVideos() {

  const mvRef = useRef(null);
  const diyRef = useRef(null);
  const ostRef = useRef(null);
  const perfRef = useRef(null);

  function scrollLeft(ref) {
    ref.current?.scrollBy({ left: -320, behavior: 'smooth' });
  }
  function scrollRight(ref) {
    ref.current?.scrollBy({ left: 320, behavior: 'smooth' });
  }

  return (
    <>
      {/* main title */}
      <div className="main">
        <div className="side-nav">
          <h1>Music Videos</h1>
        </div>
        <p>Check out all the official music videos from VERIVERY, including the original MVs, DIY versions, performance videos, and OSTs</p>
      </div>

      {/* mvs */}
      <div className="mvs-content">
        <h2>MVs</h2>
        <div className="slider-wrapper">
          <button className="arrow left-arrow" onClick={() => scrollLeft(mvRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>

          <div className="card-container content-cards" ref={mvRef}>
            {MVs.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.title} />
                    <p className='overlay-title content-title'>{v.title}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={() => scrollRight(mvRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>

      {/* mvs diys */}
      <div className="mvs-content">
        <h2>MVs DIY VER.</h2>
        <div className="slider-wrapper">
          <button className="arrow left-arrow" onClick={() => scrollLeft(diyRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>

          <div className="card-container content-cards" ref={diyRef}>
            {DIYs.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.title} />
                    <p className='overlay-title content-title'>{v.title}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={() => scrollRight(diyRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>

      {/* ost*/}
      <div className="mvs-content">
        <h2>OSTs</h2>
        <div className="slider-wrapper">
          <button className="arrow left-arrow" onClick={() => scrollLeft(ostRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button>

          <div className="card-container content-cards" ref={ostRef}>
            {OSTs.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.title} />
                    <p className='overlay-title content-title'>{v.title}</p>
                  </div>
                </a>
              </>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={() => scrollRight(ostRef)} aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </div>

      {/* performance videos */}
      <div className="mvs-content">
        <h2>Perfomance Videos</h2>
        <div className="slider-wrapper">
          {/* <button className="arrow left-arrow" onClick={() => scrollLeft(perfRef)} aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </button> */}

          <div className="card-container content-cards" ref={perfRef}>
            {PerfomanceVideos.map(v => (
              <>
                <a
                  key={v.id}
                  href={v.link}
                  target='_blank'
                  className='videoCard contentCard'
                >
                  <div className='thumbnail-wrapper'>
                    <img src={v.thumbnail} alt={v.title} />
                    <p className='overlay-title content-title'>{v.title}</p>
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

export default MusicVideos;