import logo from './logo.svg';
import './App.css';
import react from "react"
import reactDom from "react-dom"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import NosotrosPage from './pages/NosotrosPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {<HomePage></HomePage>} ></Route>
      <Route exact path = "/contacto" element = {<ContactoPage></ContactoPage>} ></Route>
      <Route exact path = "/novedades" element = {<NovedadesPage></NovedadesPage>} ></Route>
      <Route exact path = "/nosotros" element = {<NosotrosPage></NosotrosPage>} ></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
