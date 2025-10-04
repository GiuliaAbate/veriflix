import { useRef } from 'react';
import { Lives, MembersOriginals, Misc, New, Series } from '../../models/originals.ts';
import './Originals.css';

function Originals() {
  const newRef = useRef(null);
  const seriesRef = useRef(null);
  const membersRef = useRef(null);
  const miscRef = useRef(null);
  const livesRef = useRef(null);

  function scrollLeft(ref) {
    ref.current?.scrollBy({ left: -320, behavior: 'smooth' });
  }
  function scrollRight(ref) {
    ref.current?.scrollBy({ left: 320, behavior: 'smooth' });
  }

  return (
    <>
      {/* sezioni: new, series, members' original content, festivities, miscellaneous */}
      <div className="main">
        <div className="side-nav">
          <h1>Originals</h1>
          {/* drop down*/}
          {/* <select name="content" id="content">
            <option value="new">New</option>
            <option value="lives">Lives</option>
            <option value="series">Series</option>
            <option value="members">Member's Original</option>
            <option value="misc">Miscellaneous</option>
          </select> */}
        </div>
        {/* content cards - new*/}
        <div className='new-content'>
          <h2>New</h2>
          <div className='slider-wrapper'>
            <button className="arrow left-arrow" onClick={() => scrollLeft(newRef)} aria-label="Scroll left">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <div className='card-container content-cards' ref={newRef}>
              {New.map(n => (
                <>
                  <a
                    key={n.id}
                    href={n.link}
                    target='_blank'
                    className='videoCard contentCard'
                  >
                    <div className='thumbnail-wrapper'>
                      <img src={n.thumbnail} alt={n.name} />
                      <p className='overlay-title content-title'>{n.name}</p>
                    </div>
                  </a>
                </>
              ))}
            </div>
            <button className="arrow right-arrow" onClick={() => scrollRight(newRef)} aria-label="Scroll right">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>

        {/* content cards - Series*/}
        <div className='new-content'>
          <h2>Series</h2>
          <div className='slider-wrapper'>
            <button className="arrow left-arrow" onClick={() => scrollLeft(seriesRef)} aria-label="Scroll left">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <div className='card-container content-cards' ref={seriesRef}>
              {Series.map(n => (
                <>
                  <a
                    key={n.id}
                    href={n.link}
                    target='_blank'
                    className='videoCard contentCard'
                  >
                    <div className='thumbnail-wrapper'>
                      <img src={n.thumbnail} alt={n.name} />
                      <p className='overlay-title content-title'>{n.name}</p>
                    </div>
                  </a>
                </>
              ))}
            </div>
            <button className="arrow right-arrow" onClick={() => scrollRight(seriesRef)} aria-label="Scroll right">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>

        {/* content cards - Members' Originals*/}
        <div className='new-content'>
          <h2>Members' Originals</h2>
          <div className='slider-wrapper'>
            <button className="arrow left-arrow" onClick={() => scrollLeft(membersRef)} aria-label="Scroll left">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <div className='card-container content-cards' ref={membersRef}>
              {MembersOriginals.map(n => (
                <>
                  <a
                    key={n.id}
                    href={n.link}
                    target='_blank'
                    className='videoCard contentCard'
                  >
                    <div className='thumbnail-wrapper'>
                      <img src={n.thumbnail} alt={n.name} />
                      <p className='overlay-title content-title'>{n.name}</p>
                    </div>
                  </a>
                </>
              ))}
            </div>
            <button className="arrow right-arrow" onClick={() => scrollRight(membersRef)} aria-label="Scroll right">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>

        {/* content cards - Misc*/}
        <div className='new-content'>
          <h2>Miscellaneous</h2>
          <div className='slider-wrapper'>
            <button className="arrow left-arrow" onClick={() => scrollLeft(miscRef)} aria-label="Scroll left">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <div className='card-container content-cards' ref={miscRef}>
              {Misc.map(n => (
                <>
                  <a
                    key={n.id}
                    href={n.link}
                    target='_blank'
                    className='videoCard contentCard'
                  >
                    <div className='thumbnail-wrapper'>
                      <img src={n.thumbnail} alt={n.name} />
                      <p className='overlay-title content-title'>{n.name}</p>
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

        {/* content cards - Lives*/}
        <div className='new-content'>
          <h2>Lives</h2>
          <div className='slider-wrapper'>
            <button className="arrow left-arrow" onClick={() => scrollLeft(livesRef)} aria-label="Scroll left">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </button>
            <div className='card-container content-cards' ref={livesRef}>
              {Lives.map(n => (
                <>
                  <a
                    key={n.id}
                    href={n.link}
                    target='_blank'
                    className='videoCard contentCard'
                  >
                    <div className='thumbnail-wrapper'>
                      <img src={n.thumbnail} alt={n.name} />
                      <p className='overlay-title content-title'>{n.name}</p>
                    </div>
                  </a>
                </>
              ))}
            </div>
            <button className="arrow right-arrow" onClick={() => scrollRight(livesRef)} aria-label="Scroll right">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>


      </div>
    </>
  );

}

export default Originals;