import React from 'react';
import './home.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../../components/component-main-page/src/MainPage'
import Setting from '../../components/component-setting/setting.js'
import Home from '../../components/component-homePage/App'
import Login from '../../components/component-homePage/login/Login';
import Register from '../../components/component-homePage/login/Register';
import Form from '../../components/component-homePage/login/Form'
// import Admin from '../../components/component-adminPart/component-admin-src/admin'
function App() {
  return (
    // <div id='bodyConatiner'>
    //   <Home/>
    //   {/* <MainPage/> */}
    //   {/* <Community/> */}
    //   {/* <Setting/> */}
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
      </Route>
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/setting" element={<Setting />} />
      {/* <Route path="/admin" element={<Admin />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;