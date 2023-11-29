import '../index.css'
import backgroundImage from '/DSC03279.jpg';
import Intro from '../components/Intro.tsx';
import Navbar from '../components/Navbar.tsx';
import Connect from '../components/Connect.tsx';


const Home = () => {
    return (
        <div 
          className='
          fixed
          opacity-80
          overflow-y-auto'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            display: 'flex',
        }}>

          <Intro/>
          <Navbar/>
          <Connect/>


        </div>
    );
}

export default Home;