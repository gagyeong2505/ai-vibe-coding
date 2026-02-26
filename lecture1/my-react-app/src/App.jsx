import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter basename='/ai-vibe-coding/portfolio'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
