
import './App.css';
import CompanyPage from './components/CompanyPage';
import HomePage from './components/HomePage';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/company' element={<CompanyPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
