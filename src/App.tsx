import './index.css'
import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
  <div className="container-fluid absolute bg-white">
      <img className="w-full h-full opacity-75" src="src/projectimg/DSC03279.jpg" />

      {/* Overlay Divs */}
      <div className="absolute w-full h-1/6 left-0 top-896 bg-white"/>
      <div className="w-full h-0 absolute border border-white" style={{ top: '6%' }}></div>
      <div className="w-1/2 h-0 absolute border border-white" style={{ top: '56%' }}></div>


      {/* Navigation Links */}
      <div className="absolute text-stone-700 xs: text-xs sm:text-sm md:text-lg lg:text-xl font-normal font-['Helvetica']" style={{top: '1.5%', left: '90%'  }}>Projects</div>
      <div className="absolute text-stone-700 xs: text-xs sm:text-sm md:text-lg lg:text-xl font-normal font-['Helvetica']" style={{top: '1.5%', left: '80%'  }}>Resume</div>
      <div className="absolute text-stone-700 xs: text-xs sm:text-sm md:text-lg lg:text-xl font-normal font-['Helvetica']" style={{top: '1.5%', left: '70%'  }}>Home</div>

      {/* Introduction */}
      <div className="intro-container absolute w-[613px] h-[167px] left-[56px] top-[205px]">
        <span className="text-white text-[50px] font-normal font-['Helvetica']">Shiyu Li<br/></span>
        <span className="text-white text-4xl font-normal font-['Helvetica']">Student, Software Developer, and Pharmacist<br/></span>
      </div>

      {/* About Section */}
      <div className="w-[728px] h-[329px] left-[56px] top-[386px] absolute">
        <span className="text-white text-4xl font-normal font-['Helvetica']">About<br/></span>
        <span className="text-white text-xl font-normal font-['Helvetica']">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science (Second Degree) program at University of British Columbia.<br/><br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across. <br/><br/>I am always looking to explore opportunities in the tech industry and taking on new challenges, so feel free to reach out!</span>
      </div>

      {/* Social Media Links */}
      <div style={{width: 340, height: 50, left: 41, top: 935, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 45.54, display: 'inline-flex'}}>
        <img style={{width: 52.46, height: 50}} src="src/icons/icons8-linked-in-100.png" />
        <img style={{width: 50, height: 50}} src="src/icons/icons8-github-96.png" />
        <img style={{width: 50, height: 50}} src="src/icons/icons8-instagram-100.png" />
        <img style={{width: 50, height: 50}} src="src/icons/icons8-mail-100.png" />
      </div>
      

  </div>

  );
}

export default App
