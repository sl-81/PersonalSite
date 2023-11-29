
import '../index.css';
import linkedin from '/icons/icons8-linked-in-100.png';
import github from '/icons/icons8-github-96.png';
import instagram from '/icons/icons8-instagram-100.png';
import email from '/icons/icons8-mail-100.png';

function Connect() {
  return (
    <div
      className="
      bg-white 
      bottom-0 
      absolute 
      flex 
      items-center 
      justify-between 
      w-full px-4 
      py-2 
      sm:px-8"
      style={{ height: '10vh' }}
    >
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/shiyu81/" target="_blank" rel="noopener noreferrer">
          <img className="w-12 h-12" src={linkedin} alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/sl-81" target="_blank" rel="noopener noreferrer">
          <img className="w-12 h-12" src={github} alt="Github Icon" />
        </a>
        <a href="https://www.instagram.com/ssssshiyuu/" target="_blank" rel="noopener noreferrer">
          <img className="w-12 h-12" src={instagram} alt="Instagram Icon" />
        </a>
        <a href="mailto:shiyu.li.1109@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="w-12 h-12" src={email} alt="Email Icon" />
        </a>
      </div>
      <div className="font-['Helvetica']">
        <p>© 2023 Shiyu Li</p>
      </div>
    </div>
  );
}

export default Connect;
