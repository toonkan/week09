import React from 'react';
import Home from './page';
import About from './screen/About';
import Contact from './screen/Contact';
import NotFoundPage from './screen/NotFoundPage';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Card from './screen/Card';
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/card" component={Card}/>
          <Route component={NotFoundPage}/>
        </Switch>
        {/* Footer */}
        <Footer college="วิทยาลัยเทคนิคตราด" address="480 หมู่ 9 ถนนสุขุมวิท ต.วังกระเเจะ อ.เมือง จ.ตราด" name="ต้นตระการ เจนจัดการ"/>
      </div>
    </Router>
  );
}

export default App;
