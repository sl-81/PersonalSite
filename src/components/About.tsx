import '../index.css';

function About() {
    return (
      <div className="absolute h-2/3 w-full">
        <span className="
        text-black
        text-3xl 
        font-normal 
        font-['Helvetica'] 
        absolute 
        bottom-12
        left-5
        h-28
        w-16">About<br/>
        </span>
        <span className="
        text-black
        text-sm
        font-normal 
        font-['Helvetica'] 
        absolute 
        bottom-0 
        left-5
        h-28
        w-1/2">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science (Second Degree) program at University of British Columbia.<br/><br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across. I am always looking to explore opportunities in the tech industry and taking on new challenges, so feel free to reach out!
        </span>
        <hr className="
        h-px 
        my-80 
        bg-white 
        border-0 
        w-1/2"/>
      </div>
    );
}

export default About;