import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/HomePage/Home/Home';
import AuthProvider from './context/AuthProvider';

// Authetocation Route
import Login from './pages/Authentication/Login/Login';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './pages/Authentication/Register/Register';

import Blogs from './pages/Blogs/Blogs';
import MyBlogs from './pages/MyBlogs/MyBlogs';
import NotFound from './pages/NotFound/NotFound';
import PublishBlog from './pages/PublishBlog/PublishBlog';
import BlogDetails from './pages/HomePage/HomeBlogs/BlogDetails';

// Admin route 
import AdminRoute from './pages/Authentication/AdminRoute/AdminRoute';
import MakeAdmin from './pages/Authentication/MakeAdmin/MakeAdmin';
import ManageBlogs from './pages/ManageBlogs/ManageBlogs';
import UpdateBlog from './pages/ManageBlogs/UpdateBlog';
import PublishAdminBlog from './pages/PublishAdminBlog/PublishAdminBlog';

// shared route 
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/manage-blogs' element={<AdminRoute><ManageBlogs /></AdminRoute>} />
            <Route path='/publish-blog-admin' element={<AdminRoute><PublishAdminBlog /></AdminRoute>} />
            <Route path='/update/:id' element={<AdminRoute><UpdateBlog /></AdminRoute>} />
            <Route path='/my-blogs' element={<MyBlogs />} />
            <Route path='/make-admin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path='/blog-details/:id' element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
            <Route path='/publish-blog' element={<PrivateRoute><PublishBlog /></PrivateRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

