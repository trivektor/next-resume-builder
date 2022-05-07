import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import { useMutation, useQueryClient } from "react-query";
import Link from "next/link";

const ResumeCard = ({ resume }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(async (deletedResume) => {
    await fetch(`/api/resumes/${deletedResume._id}/destroy`, {
      method: "DELETE",
    });

    queryClient.invalidateQueries("resumes");
  });
  const onDelete = () => {
    if (confirm("Are you sure?")) {
      deleteMutation.mutate(resume);
    }
  };

  return (
    <Paper elevation={2} sx={{ padding: "20px" }}>
      <Typography variant="h5">{resume.title}</Typography>
      <Typography>{resume.description}</Typography>
      <List>
        <ListItem>
          <Link href={`/resumes/${resume._id}/edit`} passHref>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              startIcon={<EditIcon />}
              size="small"
            >
              Edit
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            size="small"
            onClick={onDelete}
          >
            Delete
          </Button>
        </ListItem>
      </List>
    </Paper>
  );
};

export default ResumeCard;
