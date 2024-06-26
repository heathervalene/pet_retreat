import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Map from './components/Map'
import ImageGallery from './components/ImageGallery'
import Contact from './components/Contact'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Pricing from './components/Pricing'
import Thanks from './components/Thanks'

import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/map' element={<Map />} />
      <Route path='/gallery' element={<ImageGallery />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path= '/reviews' element={<Reviews />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/thanks' element={<Thanks />} />
      </Routes>
      </main>
    </div>
  );
};
export default App
