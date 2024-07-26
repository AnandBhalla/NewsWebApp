import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const pageSize = 50;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)

    return (
      <>
        <Router>
          <Navbar/>
          <LoadingBar color='#f11946' progress={progress} height={5}/>
          <Routes>
            <Route path="/NewsApp" element={<News apiKey={apiKey} setProgress={setprogress}  key="home" country="in" category="general" pageSize={pageSize} />} />
            <Route path="/general" element={<News apiKey={apiKey} setProgress={setprogress} key="general" country="in" category="general" pageSize={pageSize} />} />
            <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setprogress} key="entertainment" country="in" category="entertainment" pageSize={pageSize} />} />
            <Route path="/business" element={<News apiKey={apiKey} setProgress={setprogress} key="business" country="in" category="business" pageSize={pageSize} />} />
            <Route path="/sports" element={<News apiKey={apiKey} setProgress={setprogress} key="sports" country="in" category="sports" pageSize={pageSize} />} />
            <Route path="/health" element={<News apiKey={apiKey} setProgress={setprogress} key="health" country="in" category="health" pageSize={pageSize} />} />
            <Route path="/science" element={<News apiKey={apiKey} setProgress={setprogress} key="science" country="in" category="science" pageSize={pageSize} />} />
            <Route path="/technology" element={<News apiKey={apiKey} setProgress={setprogress} key="technology" country="in" category="technology" pageSize={pageSize} />} />
          </Routes>
        </Router>
      </>
    );
  }

export default App;