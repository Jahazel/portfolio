import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <h1>Past Work</h1>
      <div className="projects-container">
        <ProjectCard
          title="Milk and Honey"
          description="Collaborated within a team to develop and optimize an order management system using React and Firebase."
          image="/../assets/milk-and-honey.png"
          techStack={["React", "Firebase", "CSS"]}
        />
      </div>
    </>
  );
};

export default Projects;
