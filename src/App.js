import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import ViewPatients from './components/ViewPatients';
import SearchPatients from './components/SearchPatients';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPatient/>}/>
        <Route path='/view' element={<ViewPatients/>}/>
        <Route path='/search' element={<SearchPatients/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
