import React from 'react';
import '../index.css'

interface ProjectProps {
    title: string;
    skills: string;
    desc: string;
    src: string;
    demo: string;
  }

  const Project: React.FC<ProjectProps> = (props) =>{

    return (
        <div className="
        opacity-100
        bg-zinc-100 
        rounded-2xl
        border-2 
        border-black
        top-4
        p-4
        m-8
        w-2/3
        flex
        flex-col
        items-center">
            <h2 className="
                text-2xl 
                font-['Helvetica']
                mb-2">{props.title}
            </h2>
            <span className="
                text-lg
                font-['Helvetica']
                mb-1">{props.skills}
            </span>
            <img className="
                border-2 
                border-black
                max-h-80"
                 src={props.src} alt="projectimage">
            </img>
            <span className="
                text-base
                font-['Helvetica']
                mb-2">{props.desc}
            </span>
            <a href={props.demo} target="_blank">
            <button className="
            border-2
            border-black
            rounded-lg
            px-4
            py-1
            bg-white"> View Project</button>
            </a>
        </div>
    );

}

export default Project;