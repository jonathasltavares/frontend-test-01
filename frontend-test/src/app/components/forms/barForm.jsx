"use client";
import InputComponent from "./input";
import ButtonComponent from "./button";

import { useState } from "react";

import { Box } from "@mui/material";

export default function barForm({operation}) {
  const [inputNameData, setInputNameData] = useState("");

  const handleChange = (event) => {
    setInputNameData(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <div className="flex flex-col items-center">
        <InputComponent
          isDisabled={false}
          isRequired={true}
          label="Name"
          onChange={handleChange}
        />
        <ButtonComponent
          size={"large"}
          isDisabled={false}
          variant="contained"
          text={operation}
          color="1976d2"
          onClick={() => {
            console.log(inputNameData);
          }}
        />
      </div>
    </Box>
  );
}
