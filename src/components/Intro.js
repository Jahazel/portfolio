import profileImg from "../assets/hero_img.jpeg";
const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <img className="hero_img" src={profileImg} alt="profile image" />
        <h1>Hi, my name is Jahazel Sanchez!</h1>
        <p>
          I'm currently a rising junior in{" "}
          <a href="https://www.pomona.edu/" target="_blank">
            <span>
              <strong>Pomona College</strong>
            </span>
          </a>{" "}
          majoring in Computer Science.
        </p>
      </div>
    </div>
  );
};
export default Intro;
