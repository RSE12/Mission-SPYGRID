import { useState } from "react";
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";

interface loginProps {
  handleLoginSuccess: (value: any) => void;
}
export default function Login({ handleLoginSuccess }: loginProps) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (userName && password) {
      setError("");
      sessionStorage.setItem("isLoggedIn", "true");
      handleLoginSuccess({
        spyId: userName,
        password: password,
      });
    } else {
      setError("Both Spyid and Password are required");
    }
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
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Password"
            type={"password"}
            data-testid="password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          {error && (
            <Typography data-testid="error" sx={{ color: "red" }}>
              Errors: {error}
            </Typography>
          )}
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
