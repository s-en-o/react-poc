import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Parallax from './pages/Parallax';
import Layout from './components/Layout';

const App = () => (
    <Layout>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parallax" element={<Parallax />} />
            </Routes>
        </div>
    </Layout>
);

export default App;
