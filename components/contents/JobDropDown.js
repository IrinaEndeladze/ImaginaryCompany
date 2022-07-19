import React, { useState, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function JobDropDown({ handleChange, setFilter, job }) {
  const [jobArray, setJobArray] = useState([]);

  useEffect(() => {
    fetch("https://test-task-api-optimo.herokuapp.com/job")
      .then((response) => response.json())
      .then((data) => setJobArray(data));
  }, []);

  useEffect((value) => {
    if (value === "All") {
      setFilter(false);
    }
  }, []);
  console.log(jobArray);
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Job</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={job[0]}
          onChange={handleChange}
          label="Job"
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {jobArray.map((item) => {
            return (
              <MenuItem value={item.id} key={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default JobDropDown;
