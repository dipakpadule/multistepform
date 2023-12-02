import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { TextField, Typography } from "@mui/material";

const PersonalInfo = () => {
  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Personal Info
          </Typography>
          <Typography variant="body2">
            Please provide your name, email address, and phone number.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            placeholder="e.g. Stephen King"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default PersonalInfo;
