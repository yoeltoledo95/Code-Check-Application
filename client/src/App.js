import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Pages & Components
import LobbyPage from './pages/LobbyPage';
import CodeBlockPage from './pages/CodeBlockPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<LobbyPage/>}/>
            <Route path="/codeBlock/:codeBlockid" element={<CodeBlockPage/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
