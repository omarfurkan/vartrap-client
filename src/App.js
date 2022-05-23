import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
