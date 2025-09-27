import { verivery } from "../../models/profiles";
import './Cast.css';

function Cast() {
  return (
    <>
      <div className="main-container">
        <h1>Starring Cast</h1>
        <div className="cast-container">
          {verivery.map(vrvr => (
            <div key={vrvr.id} className="members">
              <img src={vrvr.pfp} alt={vrvr.name} />
              <h2>{vrvr.name}</h2>
              <div className="info-container">
                <ul>
                  <li><strong>Birthday</strong>: {vrvr.birthday}</li>
                  <li><strong>Positions</strong>: {vrvr.role}</li>
                  <li><strong>Representative Emoji</strong>: {vrvr.repEmoji}</li>
                  <li>
                    <strong>Instagram</strong>:{" "}
                    {vrvr.instagram ? (
                      <a
                        href={`https://www.instagram.com/${vrvr.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{vrvr.instagram}
                      </a>
                    ) : (
                      <span>N/A</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cast;