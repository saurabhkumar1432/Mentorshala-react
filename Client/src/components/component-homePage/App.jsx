import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Front from './front/Front'
// import Form from './components/login/Form'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import './App.css'
const App = () => {
  return (
    <div className='homeContainer'>
      <Header />
      <Nav />
      <Front/>
      <About />
      <Contact />
      <Footer />
    </div>
    
  )
}
export default App
