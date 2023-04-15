import { Button, TextField, Grid } from "@mui/material";

export default function Login() {
  const handleLogin = () => {
    sessionStorage.setItem("isLoggedIn", "true");
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField label="Username"></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Password" type={"password"}></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth onClick={handleLogin}>
          {" "}
          Login{" "}
        </Button>
      </Grid>
    </Grid>
  );
}
