import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from '../src/styles/app.module.css';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Feutenawards from './pages/Feutenawards.tsx';
import Enzines from './pages/Enzines.tsx';
import Redactie from './pages/Redactie.tsx';
import Stampboom from './pages/Stampboom.tsx';

function App() {
  return (
    <div className={styles.mainContainer}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feutenawards" element={<Feutenawards />} />
          <Route path="/enzines" element={<Enzines />} />
          <Route path="/redactie" element={<Redactie />} />
          <Route path="/stampboom" element={<Stampboom />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
