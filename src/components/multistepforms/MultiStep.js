import React, { useState } from "react";
import "./multistep.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import PersonalInfo from "./PersonalInfo";
import Plans from "./Plans";
import AddOns from "./AddOns";
import Summary from "./Summary";

const MultiStep = () => {
  const [page, setPage] = useState(0);
  const FormTittles = [
    "Personal Info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo />;
    } else if (page === 1) {
      return <Plans />;
    } else if (page === 2) {
      return <AddOns />;
    } else {
      return <Summary />;
    }
  };
  return (
    <Container className="main-container" sx={{ m: 0 }}>
      <Box className="body">{PageDisplay()}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          disabled={page <= 0 ? true : false}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </Button>
        {page >= 3 ? (
          <Button variant="contained" onClick={() => alert("Successful")}>
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={page >= 3 ? true : false}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default MultiStep;
