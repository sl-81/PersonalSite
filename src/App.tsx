import './index.css'
import "bootstrap/dist/css/bootstrap.css";

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
    <div className="w-[120px] h-9 left-[1320px] top-[17px] absolute text-stone-700 text-xl font-normal font-['Helvetica']">Projects</div>
    <div className="w-[120px] h-9 left-[1206px] top-[17px] absolute text-stone-700 text-xl font-normal font-['Helvetica']">Resume</div>
    <div className="w-[120px] h-9 left-[1092px] top-[17px] absolute text-stone-700 text-xl font-normal font-['Helvetica']">Home</div>
    <div className="w-[613px] h-[167px] left-[56px] top-[205px] absolute">
      <span className="text-white text-[50px] font-normal font-['Helvetica']">Shiyu Li<br/></span>
      <span className="text-white text-4xl font-normal font-['Helvetica']">Student, Software Developer and Pharmacist<br/></span>
    </div>
    <div className="w-[728px] h-[329px] left-[56px] top-[486px] absolute">
      <span className="text-white text-4xl font-normal font-['Helvetica']">About<br/></span>
      <span className="text-white text-xl font-normal font-['Helvetica']">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science (Second Degree) program at University of British Columbia.<br/><br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across. <br/><br/>I am always looking to explore opportunities in the tech industry and taking on new challenges, so feel free to reach out!</span>
    </div>
    <div className="w-[340px] h-[50px] left-[41px] top-[935px] absolute justify-center items-start gap-[45.54px] inline-flex">
        <img className="w-[52.46px] h-[50px]" src="src/icons/icons8-linked-in-100.png" />
        <img className="w-[50px] h-[50px]" src="src/icons/icons8-github-96.png" />
        <img className="w-[50px] h-[50px]" src="src/icons/icons8-instagram-100.png" />
        <img className="w-[50px] h-[50px]" src="src/icons/icons8-mail-100.png" />
    </div>
</div>
  </div>
</div>

  );
}

export default App
