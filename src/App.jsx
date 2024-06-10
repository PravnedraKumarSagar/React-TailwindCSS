import { BrowserRouter as Router} from 'react-router-dom';

import AllRoutes from './AllRoutes'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


function App() {
 

  return (
    <Router>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </Router>
  )
}

export default App
