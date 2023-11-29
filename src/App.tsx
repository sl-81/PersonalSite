import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import Home from './components/Home';




const App =() => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<ProjectPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
