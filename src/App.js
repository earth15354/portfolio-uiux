import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'

import ResponsiveRedesign from './pages/Projects/ResponsiveRedesign';
import Development from './pages/Projects/Development';
import IterativeDesign from './pages/Projects/IterativeDesign';

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/projects' element={<Projects />}/>
              <Route path='responsive_redesign' element={<ResponsiveRedesign />} />
              <Route path='development' element={<Development />} />
              <Route path='iterative_design' element={<IterativeDesign />} />
              <Route path='*' element={<NoPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

/*
QUESTIONS FOR PORTFOLIO REVIEW:
- Where can I put my publications? Is it ok to say work instead of projects?
- Should I include extra curriculars and other things in my portfolio?
- Is the logo out of place?
- How can I make the landing page look less basic?
*/

export default App;
