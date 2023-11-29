import '../index.css';

function Intro() {
    return (
      <div className="
      fixed
      h-5/6
      w-full 
      flex 
      flex-col
      sm:w-1/2
      text-black
      font-normal 
      font-['Helvetica']
      mt-16
      pb-12
      overflow-y-auto">
        <span className="
        text-5xl 
        p-5">Shiyu Li<br/></span>
        <span className="
        text-2xl 
        p-5">Student, Software Developer and Pharmacist<br/></span>
         <hr className="
        h-px 
        my-4
        bg-white 
        border-1"/>
        <span className="
        text-base
        p-5">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science program at University of British Columbia.<br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across.
        </span>
      </div>
    );
}

export default Intro