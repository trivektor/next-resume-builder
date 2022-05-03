import { Card, Elevation } from "@blueprintjs/core";

const ResumeCard = ({ resume }) => {
  return (
    <Card elevation={Elevation.TWO}>
      <h5>{resume.title}</h5>
    </Card>
  );
};

export default ResumeCard;
