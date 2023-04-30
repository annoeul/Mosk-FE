import React from "react"
import { Box, Button, Container, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material"
import { CheckBox } from "@mui/icons-material"
import Logo from "../common/logo"

function LoginForm() {
  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          name="email"
          label="Email Address"
          required
          fullWidth
          autoComplete="email"
          margin="normal"
          autoFocus
        />
        <TextField
          name="password"
          label="password"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
          margin="normal"
        />
        <FormControlLabel control={<CheckBox value="remember" color="primary" />} label="Remember me" />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          login
        </Button>
        {/* <Grid container>
          <Grid item xs>
            <Link to="#">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="register" variant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid> */}
      </Box>
    </Container>
  )
}

export default LoginForm
