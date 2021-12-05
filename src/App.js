import './App.css';
import Contact from './components/Contact'
import Contacts from './components/Contacts'

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Contacts />} />
        <Route exact path='/:id' element={<Contact />} />
      </Routes>
    </div>
);  
  }

export default App;
