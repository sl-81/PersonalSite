import '../index.css';

function Navbar() {
    return (
      <div className="
        top-6
        absolute 
        text-black-700 
        text-xl 
        font-normal 
        font-['Helvetica']
        right-4
        space-x-8
        ">
        <button className="
        hover:bg-white">Projects
        </button>
        <button className="
        hover:bg-white">Resume
        </button>
        <button className="
        hover:bg-white">Home
        </button>
      </div>

    );

}

export default Navbar