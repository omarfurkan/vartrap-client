import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import AddProduct from './Components/Dashboard/AddProduct';
import AddReview from './Components/Dashboard/AddReview';
import Dashboard from './Components/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import ManageOrders from './Components/Dashboard/ManageOrders';
import ManageProducts from './Components/Dashboard/ManageProducts';
import MyOrders from './Components/Dashboard/MyOrders';
import MyProfile from './Components/Dashboard/MyProfile';
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

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyOrders />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='manageorders' element={<ManageOrders />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='makeadmin' element={<MakeAdmin />} />
          <Route path='manageproducts' element={<ManageProducts />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
