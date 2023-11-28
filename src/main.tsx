import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProjectPage  from './components/ProjectPage.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProjectPage />
  </React.StrictMode>,
)
