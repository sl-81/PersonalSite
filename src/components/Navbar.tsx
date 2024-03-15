import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
    return (
      <div className="
        fixed
        text-black-700 
        text-xl 
        font-normal 
        font-['Helvetica']
        right-4
        p-4
        ">
        <Link to="/projects" className="
        p-4
        hover:bg-white">Projects
        </Link>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="p-4 hover:bg-white">
        Resume
        </a>
        <Link to="/" className="
        p-4
        hover:bg-white">Home
        </Link>
        <hr className="
            h-px 
            my-3
            bg-white 
            border-1
            w-full"/>
      </div>

    );

}

export default Navbar