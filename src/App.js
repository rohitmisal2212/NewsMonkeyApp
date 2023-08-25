
import './App.css';
import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  const pageSize = 20

  const [progress, setProgress] = useState(0)



  return (<>
    <Router>
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<News seeProgress={setProgress} key="home" pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/home' element={<News seeProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/science' element={<News seeProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />
        <Route exact path='/sport' element={<News seeProgress={setProgress} key="sport" pageSize={pageSize} country="in" category="sport" />} />
        <Route exact path='/entertainment' element={<News seeProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        <Route exact path='/business' element={<News seeProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route exact path='/technology' element={<News seeProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </Router>
  </>
  )
}

export default App;