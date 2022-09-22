import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Print from './components/Print';
import Code from './components/Code';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />   
      <Route path="print" element={<Print />} /> 
      <Route path="code" element={<Code />} />       
      </Route>
    </Routes>
    </>
  )
}

export default App;
