import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import { useMutation, useQueryClient } from "react-query";

const ResumeCard = ({ resume }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(async (deletedResume) => {
    await fetch(`/api/resumes/${deletedResume._id}`, {
      method: "DELETE",
    });

    queryClient.invalidateQueries("resumes");
  });
  const onDelete = () => {
    deleteMutation.mutate(resume);
  };

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#4caf50" }}>
            <InsertDriveFileIcon />
          </Avatar>
        }
        title={resume.title}
      />
      <CardContent>{resume.description}</CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          size="small"
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          size="small"
          onClick={onDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ResumeCard;
