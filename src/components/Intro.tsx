import '../index.css';

function Intro() {
    return (
      <div className="relative h-2/3 w-3/4">
        <span className="
        text-white 
        text-5xl 
        font-normal 
        font-['Helvetica']
        absolute
        top-48
        left-5">Shiyu Li<br/></span>
        <span className="
        text-white 
        text-3xl 
        font-normal 
        font-['Helvetica']
        absolute
        top-64
        left-5">Student, Software Developer and Pharmacist<br/></span>
        <hr className="
        h-px 
        my-20 
        bg-white 
        border-0
        w-full"/>
      </div>

    );
}

export default Intro