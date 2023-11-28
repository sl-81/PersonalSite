import '../index.css';

function Navbar() {
    return (
      <div className="
        absolute 
        text-black-700 
        text-xl 
        font-normal 
        font-['Helvetica']
        right-4
        ">
        <button className="
        p-4
        hover:bg-white">Projects
        </button>
        <button className="
        p-4
        hover:bg-white">Resume
        </button>
        <button className="
        p-4
        hover:bg-white">Home
        </button>
        <hr className="
        h-px 
        my-1
        bg-white 
        border-0
        w-full"/>
      </div>

    );

}

export default Navbar