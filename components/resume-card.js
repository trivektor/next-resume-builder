import Card from "@mui/material/Card";

const ResumeCard = ({ resume }) => {
  return (
    <Card>
      <h5>{resume.title}</h5>
    </Card>
  );
};

export default ResumeCard;
