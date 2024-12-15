import profileImg from "../assets/hero.jpeg";
const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <img className="hero_img" src={profileImg} alt="profile image" />
        <h1>Hi, my name is Jahazel</h1>
        <p>
          I'm currently a senior at{" "}
          <a href="https://www.pomona.edu/" target="_blank">
            <span>Pomona College</span>
          </a>
          , majoring in Computer Science
        </p>
      </div>
    </div>
  );
};
export default Intro;
