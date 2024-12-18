import TechTag from "./TechTag";

const ProjectCard = ({ title, description, image, techStack }) => {
  return (
    <>
      <div className="project-card">
        <div className="projetc-header">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-content">
          <img className="project-image" src={image} />
        </div>
        <div className="project-tech">
          <TechTag tags={techStack} />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
