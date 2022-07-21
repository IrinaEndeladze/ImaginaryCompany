import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function LocationDropDown({ location, LocationHandleChange }) {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetch("https://test-task-api-optimo.herokuapp.com/location")
      .then((response) => response.json())
      .then((data) => setLocationData(data));
  }, []);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={location[0]}
          onChange={LocationHandleChange}
          label="Location"
        >
          <MenuItem value="0">
            <em>All</em>
          </MenuItem>
          {locationData.map((item) => {
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

export default LocationDropDown;
