import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Design from './components/Design';
import Code from './components/Code';
import Candy from './components/Design/Candy';
import Thirteen from './components/Design/Thirteen';
import Circ from './components/Design/Circ';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />   
      <Route path="design" element={<Design />} /> 
      <Route path="design/candy" element={<Candy />} />
      <Route path="design/thirteen" element={<Thirteen />} />
      <Route path="design/circ" element={<Circ />} />
      <Route path="code" element={<Code />} />       
      </Route>
    </Routes>
    </>
  )
}

export default App;
