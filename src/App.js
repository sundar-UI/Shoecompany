import './App.scss';
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import Products from './components/Products'
import Footer from './components/Footer'
import Create from './components/Create'
import List from './components/List'
import Update from './components/Update'
import Home from './components/Home'
import Detail from './components/Detail'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
       {/* <Header />
       <Banner />
       <Products />
       <Footer />
       <Create /> */}
       
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/create" element={<Create />}/>
              <Route path="/list" element={<List />}/>
              <Route path="/update" element={<Update />}/>
              {/* <Route path="/detail/:id" element={<Detail />}/> */}
              <Route path="/products/:id" element={<Detail />} />
          </Routes>
          <Footer />
      </Router>


    </div>
  );
}

export default App;
