import './stylesCA.css'
import './stylesEV.css'
import './stylesJK.css'
import './stylesHZ.css'
import './stylesTC.css'
import { Outlet } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      
    <Header />
    <Outlet />
    <Footer />


    </div>
  );
}

export default App;
