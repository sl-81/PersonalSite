import '../index.css';

function Intro() {
    return (
      <div className="relative h-2/3 w-full top-1/4">
        <span className="
        text-black
        text-5xl 
        font-normal 
        font-['Helvetica']
        fixed
        left-5">Shiyu Li<br/></span>
        <span className="
        text-black
        text-2xl 
        font-normal 
        font-['Helvetica']
        fixed
        top-1/3
        left-5">Student, Software Developer and Pharmacist<br/></span>
         <hr className="
        h-px 
        my-40
        bg-white 
        border-0 
        w-1/2"/>

        <span className="
        text-black
        text-base
        font-normal 
        font-['Helvetica'] 
        fixed
        left-5
        h-28
        w-full
        top-1/2
        sm:w-1/2">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science program at University of British Columbia.<br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across.
        </span>
      </div>

    );
}

export default Intro