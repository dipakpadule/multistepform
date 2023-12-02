import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";

const Plans = () => {
  return (
    <Card sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Select your plan
          </Typography>
          <Typography variant="body2">
            You have the option of monthly or yearly billing.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ height: 100 }}>
            <img src="images/icon-arcade.svg" alt="arcade" />
          </Card>
        </Grid>
        <Grid item xs={12}>
          Advanced $12/mo
        </Grid>
        <Grid item xs={12}>
          Pro $15/mo
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <Typography variant="h6">
              Monthly <FormControlLabel control={<Switch defaultChecked />} />
              Yearly
            </Typography>
          </FormGroup>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Plans;
