import './index.css'

import backgroundImage from './projectimg/DSC03279.jpg';

import Intro from './components/Intro.tsx';
import About from './components/About.tsx';
import Navbar from './components/Navbar.tsx';
import Connect from './components/Connect.tsx';

const App =() => {

  return (
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
      <Intro/>
      <About/>
      <Navbar/>
      <Connect/>

    </div>

  );
}

export default App
