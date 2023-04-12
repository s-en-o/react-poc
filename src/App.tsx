import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Parallax from './pages/Parallax';

const App = () => (
    <>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parallax" element={<Parallax />} />
            </Routes>
        </div>
    </>
);

export default App;
