import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const PagePaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  '& > h1:first-child': {
    lineHeight: '1em',
    marginBlockStart: 0,
  }
}));