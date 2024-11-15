
import Navbar from './navbar.jsx';
import Astros from './astros.jsx';
import { Routes,Route } from 'react-router-dom';
import "./App.css"
import APOD from './componentes/apod.jsx';
import About from './componentes/about.jsx';



function App() {
  const links = [
    {href:'/Home ', text: 'Home'},
    {href:'/astros', text: 'Astros'},
    {href: '/APOD', text: 'APOD'},
    {href: '/About', text: 'About'}

  ];

  return (
    <>
      <Navbar links={links} />
      <Routes>
      <Route path="/astros" element={<Astros/>} />
      <Route path="/astros" element={<Astros/>} />
     <Route path="/astros" element={<Astros />} />
     <Route path="/apod" element={<APOD />} />
     <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App
