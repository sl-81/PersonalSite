import '../index.css'
import backgroundImage from '/DSC03279.jpg';
import Intro from '../components/Intro.tsx';
import About from '../components/About.tsx';
import Navbar from '../components/Navbar.tsx';
import Connect from '../components/Connect.tsx';


const Home = () => {
    return (
        <div 
          className='
          fixed
          opacity-80'
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
          <hr className="
            h-px 
            my-16
            bg-white 
            border-0
            w-full"/>

        </div>
    );
}

export default Home;