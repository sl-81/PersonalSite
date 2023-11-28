
import '../index.css'

function Project(props) {

    return (
        <div className="
        bg-zinc-100 
        rounded-[15px] 
        border-2 
        border-black
        top-4
        p-4
        m-8
        w-1/2">
            <h2 className="
            text-xl 
            font-['Helvetica']
            mb-2">{props.title}</h2>
            <span className="
            text-m
            font-['Helvetica']
            mb-2">{props.skills}</span>
            <img src={props.src} alt="projectimage"></img>


        </div>
    );

}

export default Project;