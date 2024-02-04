import '../index.css'
import Project from './Project.tsx';
import RoboImg from '/projectimg/Sciencebot.png'
import EDImg from '/projectimg/Easydose.png'
import MMImg from '/projectimg/Mymeds.png'
import ETImg from '/projectimg/Eventtracker.png'
import PBImg from '/projectimg/PharmaBot.png'



const ProjectPanel =() => {
    return(
     <div className="
        fixed
        w-full
        top-14
        overflow-y-auto
        pb-20
        h-5/6"
        style={{
            backgroundColor: 'rgba(245, 245, 245, .8)',
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
        title="PharmaBot"
        skills="React, Tailwind CSS, TypeScript, Python, AWS, Django"
        desc="Takes an input from user describing their symptoms and recommend over-the-counter medications if their symptoms are mild enough to not require a doctor visit"
        src={PBImg}
        demo="https://devpost.com/software/pharmabot-1zo4m6"/>
        <Project 
            title="UBC Robo Science Advisor"
            skills="React, Tailwind CSS, JavaScript, Python, Flask, Postman"
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