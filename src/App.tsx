import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import Intro from './components/Intro.tsx';
import About from './components/About.tsx';
import Navbar from './components/Navbar.tsx';
import Connect from './components/Connect.tsx';

function App() {

  return (
  <div className="min-h-screen flex items-center justify-center">
  <div className="w-full h-full p-2.5 border border-gray-300 overflow-auto">
    {/* Your fixed-size components go here */}
    <div className="w-[1440px] h-[1024px] relative bg-white">
      <img className="w-[1632px] h-[1045px] left-0 top-0 absolute mix-blend-darken opacity-75" src="src/projectimg/DSC03279.jpg" />
      <div className="w-[1440px] h-40 left-0 top-[896px] absolute bg-white"></div>
      <div className="w-[1440px] h-[0px] left-0 top-[72px] absolute border border-white"></div>
      <div className="w-[880.01px] h-[0px] left-[-64px] top-[453px] absolute border border-white"></div>

      <Navbar/>
      <Intro/>
      <About/>
      <Connect/>
    </div>
  </div>
  </div>

  );
}

export default App
