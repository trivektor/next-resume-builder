import {
  Card,
  CardContent,
  Button,
  Typography,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArticleIcon from "@mui/icons-material/Article";
import Divider from "@mui/material/Divider";
import { format } from "date-fns";
import RenderedResume from "./rendered-resume";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";

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
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);
  const handleOpenMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setMenuAnchorEl(null);
  const router = useRouter();
  const onEdit = () => {
    router.push(`/resumes/${resume._id}/edit`);
  };

  return (
    <Card sx={{ padding: 0 }} elevation={1}>
      <CardContent
        sx={{
          p: 0,
          height: 350,
          overflow: "hidden",
          transform: "perspective(600px) translateZ(-200px)",
        }}
      >
        <RenderedResume resume={resume} />
      </CardContent>
      <Divider />
      <Stack direction="row" sx={{ p: 2 }} justifyContent="space-between">
        <ArticleIcon />
        <Box sx={{ width: "65%" }}>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {resume.title}
          </Typography>
          <Typography variant="subtitle2" color="#9e9e9e">
            Last updated {format(new Date(resume.updatedAt), "LLL dd, yyyy")}
          </Typography>
        </Box>
        <Box>
          <Button onClick={handleOpenMenu} variant="outlined" disableElevation>
            <MoreHorizIcon />
          </Button>
          <Menu
            open={isMenuOpen}
            onClose={handleCloseMenu}
            anchorEl={menuAnchorEl}
          >
            <MenuItem onClick={onEdit}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText>Edit Resume</ListItemText>
            </MenuItem>
            <MenuItem onClick={onClone}>
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText>Clone Resume</ListItemText>
            </MenuItem>
            <MenuItem onClick={onDelete}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText>Delete Resume</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
    </Card>
  );
};

export default ResumeCard;
