import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AdminRoute from './pages/Authentication/AdminRoute/AdminRoute';
import Login from './pages/Authentication/Login/Login';
import MakeAdmin from './pages/Authentication/MakeAdmin/MakeAdmin';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './pages/Authentication/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/HomePage/Home/Home';
import BlogDetails from './pages/HomePage/HomeBlogs/BlogDetails';
import ManageBlogs from './pages/ManageBlogs/ManageBlogs';
import MyBlogs from './pages/MyBlogs/MyBlogs';
import NotFound from './pages/NotFound/NotFound';
import PublishBlog from './pages/PublishBlog/PublishBlog';
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
            <Route path='/my-blogs' element={<MyBlogs />} />
            <Route path='/make-admin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path='/blog-details/:id' element={<BlogDetails />} />
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







/* 
It was really a bad news for me. Actually I don't know PHP. But if you give more time then it can be easy to learn. You know that, you will never learn a language within two or three days. You will only learn the basics in the period of time. I started my office from 12th January and I learned a lot of things that will help me further. One request to you that if you give me any certification or any document about the internship it will be a great help to start my career.  You can give me any position like front-end developer from your UK or BD company. After learning PHP can I join to your company again?  */
