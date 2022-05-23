import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Purchase from './Components/Purchase/Purchase';
import Navbar from './Components/Shared/Navbar';
import NotFoundPage from './Components/Shared/NotFoundPage';
import SignUp from './Components/Signup/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
