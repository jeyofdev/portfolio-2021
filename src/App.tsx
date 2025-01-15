import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import Home from '@components/Home/Home';
import Contact from '@components/Contact/Contact';
import Skills from '@components/Skills/Skills';
import Portfolio from '@components/Portfolio/Portfolio';

const App = () => (
  <div className="App">
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </div>
);

export default App;
