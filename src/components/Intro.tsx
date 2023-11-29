import '../index.css';

function Intro() {
    return (
      <div className="relative h-2/3 w-full top-1/4 flex flex-col">
        <span className="
        text-black
        text-5xl 
        font-normal 
        font-['Helvetica']
        p-5">Shiyu Li<br/></span>
        <span className="
        text-black
        text-2xl 
        font-normal 
        font-['Helvetica']
        p-5">Student, Software Developer and Pharmacist<br/></span>
         <hr className="
        h-px 
        my-4
        bg-white 
        border-1
        w-full"/>
        <span className="
        text-black
        text-base
        font-normal 
        font-['Helvetica'] 
        w-full
        sm:w-1/2
        p-5
        pb-24">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science program at University of British Columbia.<br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across.
        </span>
      </div>

    );
}

export default Intro