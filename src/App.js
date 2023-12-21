import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Unstable_Grid2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

function Header() {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [hopen, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article>
      <h1>Article</h1>
      <div>
        class="MuiButtonBase-root MuiButton-root MuiButton-outlined
        MuiButton-outlinedPrimary MuiButton-sizeMedium
        MuiButton-outlinedSizeMedium MuiButtonGroup-grouped
        MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined
        MuiButtonGroup-groupedOutlinedHorizontal
        MuiButtonGroup-groupedOutlinedPrimary MuiButton-root MuiButton-outlined
        MuiButton-outlinedPrimary MuiButton-sizeMedium
        MuiButton-outlinedSizeMedium MuiButtonGroup-grouped
        MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined
        MuiButtonGroup-groupedOutlinedHorizontal
        MuiButtonGroup-groupedOutlinedPrimary MuiButtonGroup-firstButton
        css-1rwt2y5-MuiButtonBase-root-MuiButton-root"
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup>
          <Button variant="outlined" onClick={handleClickOpen}>
            Create
          </Button>
          <Button variant="outlined">Update</Button>
        </ButtonGroup>
        <Button variant="outlined">Delete</Button>
        <Dialog open={hopen}>
          <DialogTitle>Create</DialogTitle>
          <DialogContent>
            <DialogContentText>welcome</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    </article>
  );
}
function App() {
  return (
    <Container fixed>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Nav />
        </Grid>
        <Grid item xs={10}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
