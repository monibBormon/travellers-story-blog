import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import MakeAdmin from './pages/Authentication/MakeAdmin/MakeAdmin';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/HomePage/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/make-admin' element={<MakeAdmin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;







/* 
It was really a bad news for me. Actually I don't know PHP. But if you give more time then it can be easy to learn. You know that, you will never learn a language within two or three days. You will only learn the basics in the period of time. I started my office from 12th January and I learned a lot of things that will help me further. One request to you that if you give me any certification or any document about the internship it will be a great help to start my career.  You can give me any position like front-end developer from your UK or BD company. After learning PHP can I join to your company again?  */
