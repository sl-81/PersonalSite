import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import Home from './components/Home';
import Resume from './components/Resume';




const App =() => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<ProjectPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
