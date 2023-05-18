import React from "react";
import { Button, TextField } from "@mui/material";

const MuiComponent = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </Button>
      <hr />
      <TextField
        id="outlined-basic"
        label="名前"
        variant="outlined"
        className="border-2 border-orange-500 focus:border-purple-500"
      />
      <TextField
        id="filled-basic"
        label="password"
        variant="filled"
        className="border-2 border-orange-500 focus:border-purple-500"
      />
      <TextField
        id="standard-basic"
        label="確認用password"
        variant="standard"
        className="border-2 border-orange-500 focus:border-purple-500"
      />
    </div>
  );
};

export default MuiComponent;
