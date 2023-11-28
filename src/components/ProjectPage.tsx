import '../index.css'

import backgroundImage from '../projectimg/DSC03279.jpg';
import Navbar from './Navbar.tsx';
import Connect from './Connect.tsx';
import ProjectPanel from './ProjectPanel.tsx';

const ProjectPage =() => {
    return(
    <div 
        className='opacity-80'
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            }}>
      <ProjectPanel/>
      <Navbar/>
      <Connect/>
    </div>


    );
}

export default ProjectPage;