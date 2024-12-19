import TechTag from "./TechTag";

const ProjectCard = ({ title, description, image, stack, link }) => {
  const handleDivClick = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="project-card" onClick={handleDivClick}>
        <div className="project-header-container">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-content">
          <img className="project-image" src={image} />
        </div>
        <div className="project-tech">
          <TechTag tags={stack} />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
