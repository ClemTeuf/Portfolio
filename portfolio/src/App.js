import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './parties_communes/Index';
import About from './parties_communes/About';
import HtmlCss from './parties_communes/HtmlCss';
import Javascript from './parties_communes/Javascript';
import ReactJs from './parties_communes/ReactJs';
import NodeJs from './parties_communes/NodeJs';
import Api from './parties_communes/Api';
import Sécurité from './parties_communes/Sécurité';
import UiUx from './parties_communes/UiUx';
import Work from './parties_communes/Work';
import Mentions from './parties_communes/Mentions';
import Privacy from './parties_communes/Privacy';
import Contact from './parties_communes/Contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/htmlcss" element={<HtmlCss />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/reactjs" element={<ReactJs />} />
          <Route path="/nodejs" element={<NodeJs />} />
          <Route path="/api" element={<Api />} />
          <Route path="/security" element={<Sécurité />} />
          <Route path="/uiux" element={<UiUx />} />
          <Route path="/work" element={<Work />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
