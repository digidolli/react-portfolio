import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
