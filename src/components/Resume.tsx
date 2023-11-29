import ResumePDF from '../../public/Shiyu_s_Tech_Resume.pdf'

const Resume = () => {
    return (
      <div>
        {/* Display PDF or embed PDF viewer here */}
        <iframe title="Resume" src={ResumePDF} width="100%" height="800px" />
      </div>
    );
  };
  
  export default Resume;