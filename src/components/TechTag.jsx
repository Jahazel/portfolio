const TechTag = ({ tags }) => {
  return (
    <div className="tech-tags">
      {tags.map((tag, index) => {
        <span className="tech-tag" key={index}>
          {tag}
        </span>;
      })}
    </div>
  );
};

export default TechTag;
