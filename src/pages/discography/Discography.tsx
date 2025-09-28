import './Discography.css';

function Discography() {
  return (
    <div className="m-container">
      <div className="content">
        <h1>Discography</h1>
        <p>
          Discover VERIVERY's discography through the timeline and links to their spotify and soundcloud where you can found their self-produced songs
        </p>

        <div className="timeline">
          <h2>Timeline</h2>
          <ul>
            <li>Super Special (Pre-Debut Single) - 2018</li>
            <li>VERI-US (Mini Album) - 2019</li>
            <li>VERI-ABLE (Mini Album)  - 2019</li>
            <li>VERI-CHILL (Single Album) - 2019</li>
            <li>FACE ME (Mini Album)  - 2020 </li>
            <li>FACE YOU (Mini Album)  - 2020</li>
            <li>FACE US (Mini Album)  - 2020 </li>
            <li>Series 'O' Round 1: Hall (Single Album)  - 2021 </li>
            <li>Series 'O' Round 2: Hole (Mini Album)  - 2021</li>
            <li>Series 'O' Round 0: Who (Digital Single)  - 2022 </li>
            <li>Series 'O' Round 3: Whole (Full Album)  - 2022 </li>
            <li>Liminality – EP.Love (Mini Album)  - 2022 </li>
            <li>Liminality – EP.Dream (Mini Album)  - 2023 </li>
          </ul>
        </div>
      </div>

      <div className="right-content">
        <iframe
          title="Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0GqwzS?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          title="SoundCloud Player"
          src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1027509643&show_artwork=true&show_comments=false"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
export default Discography;