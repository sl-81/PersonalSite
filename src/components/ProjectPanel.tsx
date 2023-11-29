import '../index.css'
import Project from './Project.tsx';
import RoboImg from '../../public/projectimg/Sciencebot.png'
import EDImg from '../../public/projectimg/Easydose.png'
import MMImg from '../../public/projectimg/Mymeds.png'
import ETImg from '../../public/projectimg/Eventtracker.png'



const ProjectPanel =() => {
    return(
     <div className="
        relative
        w-full
        h-5/6
        top-16
        overflow-y-auto"
        style={{
            backgroundColor: 'rgba(245, 245, 245, .8)'
        }}>
        <div className="
        flex 
        flex-col 
        items-center
        w-full 
        max-w-screen-lg 
        mx-auto
        opacity-100">
        <Project 
            title="UBC Robo Science Advisor"
            skills="React, Tailwind CSS, JavaScript, Python, Flask"
            desc="UBC Robo Science Advisor takes a prompt from a user and feeds it to an instance of 
            GPT4 trained on the data from the science advising website. This allows users to have quick answers 
            to their simple advising questions, rather than having to search through the website."
            src={RoboImg}
            demo="https://devpost.com/software/ubc-robo-science-advising"/>

        <Project 
            title="EasyDose"
            skills="React, TypeScript, Jest, CSS"
            desc="Created during children's fever medicine shortage, an app that calculates
            children’s dosage of Tylenol or Advil from partial adult tablets based on a child’s weight."
            src={EDImg}
            demo="https://github.com/sl-81/EasyDose"/>

        <Project 
            title="MyMeds"
            skills="Java, JUnit"
            desc="A Java application to easily manage multiple patient’s medications and conditions so that they can quickly
            record and access medical information."
            src={MMImg}
            demo="https://github.com/sl-81/MyMeds"/>

        <Project 
            title="Event Tracker"
            skills="Python, Flask, SQL, JavaScript, HTML, CSS"
            desc="A journal type application that allows the user to input an important event and display it as a
            list of upcoming events at the user’s request."
            src={ETImg}
            demo="https://www.youtube.com/watch?v=bZM6PUbXBZw&ab_channel=ShiyuLi"/>
        </div>
     </div>

    );
}

export default ProjectPanel;