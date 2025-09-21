import './App.css'
import NavigationBar from './components/navbar/NavigationBar'
import HomeCard from './components/ui/home/HomeCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Originals from './pages/originals/Originals';
import MusicVideos from './pages/music-videos/MusicVideos';
import Discography from './pages/discography/Discography';
import Entertainment from './pages/entertainment/Entertainment';
import Performances from './pages/performances/Performances';
import Cast from './pages/cast/Cast';

function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/music-videos" element={<MusicVideos />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/cast" element={<Cast />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
