import { useRef } from 'react';

import Image from 'react-bootstrap/Image';
import veriflix from '../../../assets/veriflix-home.png';
import original from '../../../assets/taptap.png';
import { Link } from 'react-router-dom';

import './HomeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeCard() {

    function OnBtnClick() {
        window.open("https://youtu.be/bmy6D1KoFsg?si=v3IRtusee7x1pB2S", "_blank");
    }

    const cardContainerRef = useRef(null);
    const newRef = useRef(null);

    function scrollLeft(ref) {
        ref.current?.scrollBy({ left: -320, behavior: 'smooth' });
    }
    function scrollRight(ref) {
        ref.current?.scrollBy({ left: 320, behavior: 'smooth' });
    }

    const mostPopular = [
        {
            'id': 1,
            "name": "RED (Beggin')",
            "thumbnail": "https://img.youtube.com/vi/-gzqfjzqG6U/maxresdefault.jpg",
            "link": "https://youtu.be/-gzqfjzqG6U?si=ag1jAX6cX8ViwUGS",
        },
        {
            'id': 2,
            'name': 'Boys 2 Planet Commentary',
            'thumbnail': 'https://img.youtube.com/vi/4ZNFxxtRpic/maxresdefault.jpg',
            'link': 'https://youtube.com/playlist?list=PLpkuV6RWat7tTB5h2iSY6OwZANgSO3_sD&si=aGNVXsXDE2GCH1kW',
        },
        {
            'id': 3,
            'name': 'Verivery Land',
            'thumbnail': 'https://img.youtube.com/vi/d0nevsgvouA/maxresdefault.jpg',
            'link': 'https://youtube.com/playlist?list=PLDlie7qJlOneBtcLGibg9AnqCKm_mP5UH&si=X_dFj25XCYMeuBmh',
        },
        {
            'id': 4,
            'name': 'Crazy Like That',
            'thumbnail': 'https://img.youtube.com/vi/c46Psa0YiuA/maxresdefault.jpg',
            'link': 'https://youtu.be/c46Psa0YiuA?si=SSbVp7-r6z9-WS1i',
        },
        {
            'id': 5,
            'name': 'G.B.T.B',
            'thumbnail': 'https://img.youtube.com/vi/iDfFtJcj5x4/maxresdefault.jpg',
            'link': 'https://youtu.be/iDfFtJcj5x4?si=4GAR0n-Neq7ciLQF',
        },
    ];

    const mostRecent = [
        {
            'id': 1,
            "name": "RED (Beggin')",
            "thumbnail": "https://img.youtube.com/vi/-gzqfjzqG6U/maxresdefault.jpg",
            "link": "https://youtu.be/-gzqfjzqG6U?si=ag1jAX6cX8ViwUGS",
        },
        {
            'id': 2,
            'name': 'High School`s Attack',
            'desc': '',
            'thumbnail': 'https://img.youtube.com/vi/cedhgcVhdg4/maxresdefault.jpg',
            'link': 'https://youtu.be/cedhgcVhdg4?si=J7MapBfQHcQpv-pB',
        },
        {
            'id': 3,
            'name': 'Jae` Friends EP.90',
            'thumbnail': 'https://img.youtube.com/vi/5Ry5vnP3stE/maxresdefault.jpg',
            'link': 'https://youtu.be/5Ry5vnP3stE?si=_N08Ot7ONHsnW4NZ'
        },
        {
            'id': 4,
            'name': 'Duckbap House EP.03',
            'thumbnail': 'https://img.youtube.com/vi/v6aqWxpcYCY/maxresdefault.jpg',
            'link': 'https://youtu.be/v6aqWxpcYCY?si=yuUHaHvU_wuhNMIs'
        },
        {
            'id': 5,
            'name': 'Hong Seokcheon`s Jewel Box Season 4 EP.22',
            'thumbnail': 'https://img.youtube.com/vi/dFnll24wyhY/maxresdefault.jpg',
            'link': 'https://youtu.be/dFnll24wyhY?si=WS7B616SIXzmoc1v'
        }
    ];

    return (
        <>
            <div className="HomeCard-root">
                <div className="hero-container">
                    <Image src={veriflix} alt="veriflix-original" className="main-cover" fluid />
                    <div className='hero-title'>
                        <h2>veriflix</h2>
                        <span className='text'>original</span>
                    </div>
                    <div className='hero-content'>
                        <Image src={original} alt="veriflix-original" className="original" />
                        <div className='hero-btn'>
                            <div className='div-container'>
                                <button className='staticBtn1' onClick={OnBtnClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                </svg>
                                    Play
                                </button>
                                <button className='staticBtn2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                                    <Link to="/discography" className='link-style'>
                                        More info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='main-container'>
                        <h2>TOP 5 Recent</h2>
                        <div className='slider-wrapper'>
                            <button className="arrow left-arrow" onClick={() => scrollLeft(newRef)} aria-label="Scroll left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                </svg>
                            </button>

                            <div className='card-container veriflix-cards' ref={newRef}>
                                {mostRecent.map(video => (
                                    <>
                                        <a
                                            key={video.id}
                                            href={video.link}
                                            target='_blank'
                                            className='videoCard veriflixCard'
                                        >
                                            <div className='thumbnail-wrapper'>
                                                <img src={video.thumbnail} alt={video.name} />
                                                <p className='overlay-title veriflix-title'>{video.name}</p>
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
                    <div className='main-container'>
                        <h2>TOP 5 Popular</h2>
                        <div className='slider-wrapper'>
                            <button className="arrow left-arrow" onClick={() => scrollLeft(cardContainerRef)} aria-label="Scroll left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                </svg>
                            </button>

                            <div className='card-container veriflix-cards' ref={cardContainerRef}>
                                {mostPopular.map(video => (
                                    <>
                                        <a
                                            key={video.id}
                                            href={video.link}
                                            target='_blank'
                                            className='videoCard veriflixCard'
                                        >
                                            <div className='thumbnail-wrapper'>
                                                <img src={video.thumbnail} alt={video.name} />
                                                <div className='overlay-title veriflix-title'>
                                                    <span>{video.name}</span></div>
                                            </div>
                                        </a>
                                    </>
                                ))}
                            </div>
                            <button className="arrow right-arrow" onClick={() => scrollRight(cardContainerRef)} aria-label="Scroll right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="white" strokeWidth="2" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCard;