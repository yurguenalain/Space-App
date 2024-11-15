
import Navbar from './navbar.jsx';
import Astros from './astros.jsx';
import { Routes,Route } from 'react-router-dom';
import "./App.css"
import APOD from './componentes/apod.jsx';



function App() {
  const links = [
    {href:'/Home ', text: 'Home'},
    {href:'/astros', text: 'Astros'},
    {href: '/APOD', text: 'APOD'}
  ];

  return (
    <>
      <Navbar links={links} />
      <Routes>
      <Route path="/astros" element={<Astros/>} />
      <Route path="/astros" element={<Astros/>} />
     <Route path="/astros" element={<Astros />} />
     <Route path="/apod" element={<APOD />} />
      </Routes>
    </>
  );
}

export default App
