
import './App.css';
import Fournisseur from './components/Fournisseur';
import NavBar from './components/NavBar';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom' 
import FournisseurAjt from './components/FournisseurAjt';
import Medicament from './components/Medicament';
import MedicamentAjt from './components/MedicamentAjt';


function App() {
  return (
    <div>
      <Router>
        <App/>
          <NavBar/>
            <Routes>
              <Route  path="/AjtFournisseur" element={<FournisseurAjt/>}/>
              <Route  path="/Fournisseurs" element={<Fournisseur/>}/>
              <Route  path="/Medic" element={<Medicament/>}/>
              <Route  path="/" element={<App/>}/>
              <Route  path="/AjtMedic" element={<MedicamentAjt/>}/>
            </Routes>

      </Router>
        
      
    </div>
  );
}

export default App;
