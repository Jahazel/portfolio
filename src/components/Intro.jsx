import profileImg from "../assets/hero.jpeg";
const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <img className="hero_img" src={profileImg} alt="profile image" />
        <h1>Hi, I'm Jahazel.</h1>
        <h2>
          I love creating websites and exploring how technology can connect
          people.
        </h2>
        <p>
          I’m currently a senior studying Computer Science at{" "}
          <a href="https://www.pomona.edu/" target="_blank">
            <span>Pomona College</span>
          </a>
          , where I’m learning to build everything from small apps to full-stack
          platforms.
        </p>
      </div>
    </div>
  );
};
export default Intro;
