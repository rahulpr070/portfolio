import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsLayout from './components/projects/ProjectLayout';
import  FloridCorpProject from   './components/projects/floridacorp/floridacorp.js';
import  AndwemetProject from   './components/projects/andwemet/andwemet.js';
import AmericanProject from  './components/projects/americanmodern/american.js';
import AimProject from  './components/projects/aim/aim.js';
import Home from './components/Home';

function App() {
  return (
    <Router basename="/rahulprportfolio">
      <Routes>
        <Route path="home" element={<Home />} />
         {/* Projects with common layout */}
         <Route path="projects" element={<ProjectsLayout />}>
         <Route path="floridacorp" element={<FloridCorpProject />} />
         <Route path="andwemet" element={<AndwemetProject />} />
         <Route path="american" element={<AmericanProject />} />
         <Route path="aim" element={<AimProject />} />
          {/* <Route path="other-project" element={<OtherProject />} /> */}
        </Route>
      
      </Routes>
    </Router>
  );
}

export default App;
