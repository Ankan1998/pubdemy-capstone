type CourseDescriptionRowProps = {
  paragraph: string;
}

const CourseDescriptionRow = ({ paragraph }: CourseDescriptionRowProps) => {
  return (
    <div className="row p-3">
      <div className="col">
      <h4 className="mb-3"><strong>Description</strong></h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default CourseDescriptionRow;