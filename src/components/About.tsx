import '../index.css';

function About() {
    return (
      <div className="
      fixed
      h-2/3 
      w-full
      overflow-y-auto">
        <span className="
        text-black
        text-3xl 
        font-normal 
        font-['Helvetica'] 
        fixed
        bottom-60
        left-5
        h-24
        w-16">About<br/>
        </span>
        <span className="
        text-black
        text-base
        font-normal 
        font-['Helvetica'] 
        fixed
        bottom-36
        left-5
        h-28
        w-full
        sm:w-1/2">Hi, my name is Shiyu, a computer science student enrolled in the Bachelor of Computer Science program at University of British Columbia.<br/>I previously practiced as a pharmacist for 6 years before making a career change to computer science. I enjoy using my programming skills to solve problems I come across.
        </span>
      </div>
    );
}

export default About;