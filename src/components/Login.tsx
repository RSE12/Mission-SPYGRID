import { Button, TextField, Grid, Paper, Typography } from "@mui/material";

interface loginProps {
  handleLoginSuccess: () => void;
}
export default function Login({ handleLoginSuccess }: loginProps) {
  const handleLogin = () => {
    console.log("clicked");
    sessionStorage.setItem("isLoggedIn", "true");
    handleLoginSuccess();
  };
  return (
    <Paper
      sx={{
        width: {
          xs: "100%", // theme.breakpoints.up('xs')
          sm: 500, // theme.breakpoints.up('sm')
        },
      }}
    >
      <Typography
        component="h4"
        variant="h4"
        sx={{
          marginBottom: "15px",
        }}
      >
        Spy CRM Login
      </Typography>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <TextField
            label="SPY ID"
            data-testid="spyId"
            name="spyId"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Password"
            type={"password"}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={handleLogin}>
            {" "}
            Login{" "}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
