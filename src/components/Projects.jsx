import ProjectCard from "./ProjectCard";
import milkAndHoneyImage from "../assets/milkAndHoneyImage.png";

const Projects = () => {
  return (
    <>
      <div className="project-container">
        <h2 className="project-header">Past Work/Experience</h2>
        <ProjectCard
          title="Milk and Honey"
          description="Collaborated within a team to develop and optimize an order management system using React and Firebase."
          image={milkAndHoneyImage}
          stack={["React", "Firebase", "CSS"]}
          link="https://jyumohfour.github.io/milk-honey-ordering-SaaS/#/menu"
        />
      </div>
    </>
  );
};

export default Projects;
