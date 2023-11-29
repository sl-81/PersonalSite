import { Link } from 'react-router-dom';
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
        p-6
        ">
        <Link to="/projects" className="
        p-4
        hover:bg-white">Projects
        </Link>
        <Link to="/#/Shiyu_s_Tech_Resume.pdf" target="_blank" className="
        p-4
        hover:bg-white">Resume
        </Link>
        <Link to="/" className="
        p-4
        hover:bg-white">Home
        </Link>
      </div>

    );

}

export default Navbar