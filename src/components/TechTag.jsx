const TechTag = ({ tags }) => {
  return (
    <div className="tech-tags">
      {tags.map((tag, index) => (
        <button className="tech-tag" key={index}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TechTag;
