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
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useMutation, useQueryClient } from "react-query";
import Link from "next/link";

const ResumeCard = ({ resume }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    async () => {
      await fetch(`/api/resumes/${resume._id}/destroy`, {
        method: "DELETE",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("resumes");
      },
    }
  );
  const onDelete = () => {
    if (confirm("Are you sure?")) {
      deleteMutation.mutate();
    }
  };
  const cloneMutation = useMutation(
    async () => {
      await fetch(`/api/resumes/${resume._id}/clone`, {
        method: "POST",
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("resumes");
      },
    }
  );
  const onClone = () => {
    cloneMutation.mutate();
  };

  return (
    <Paper elevation={2} sx={{ p: 4 }}>
      <Typography variant="h5">{resume.title}</Typography>
      <Typography>{resume.description}</Typography>
      <List>
        <ListItem sx={{ pr: 0, pl: 0 }}>
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
        <ListItem sx={{ pr: 0, pl: 0 }}>
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
        <ListItem sx={{ pr: 0, pl: 0 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FileCopyIcon />}
            size="small"
            onClick={onClone}
          >
            Clone
          </Button>
        </ListItem>
      </List>
    </Paper>
  );
};

export default ResumeCard;
