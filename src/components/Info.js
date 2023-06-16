const Info = ({ classes }) => {
  return (
    <div className="class-container">
      {classes.map((classItem) => (
        <div className="class-section" key={classItem.id}>
          <p className="sub-header">
            <strong>Relevant Classes Taken:</strong>
          </p>
          <p>
            <strong className="class-name">{classItem.code}—</strong>
            {classItem.name}
          </p>
          <p className="class-info">{classItem.description}</p>
        </div>
      ))}
      <hr />
    </div>
  );
};
export default Info;
