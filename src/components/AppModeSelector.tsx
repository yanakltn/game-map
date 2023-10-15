import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { AppMode } from "../types/AppMode";

type AppModeSelectorProps = {
  handleStart: (field: number) => void;
};

export const AppModeSelector = ({ handleStart }: AppModeSelectorProps) => {
  const [field, setField] = useState<number | undefined>(undefined);
  const [allModes, setAllModes] = useState<AppMode[]>([]);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setField(event.target.value as number);
  };

  const onStartClick = useCallback(() => {
    if (field) {
      handleStart(field);
    }
  }, [field, handleStart]);

  useEffect(() => {
    fetch("https://60816d9073292b0017cdd833.mockapi.io/modes")
      .then((resp) => resp.json())
      .then((data: AppMode[]) => {
        console.log(data);
        setAllModes(data);
      });
  }, []);

  return (
    <Box
      sx={{
        width: 600,
        margin: "20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="mode-select-label">Pick mode</InputLabel>
        <Select
          labelId="mode-select-label"
          id="mode-selector"
          value={field}
          label="Pick Mode"
          onChange={handleChange}
        >
          {allModes.map((mode) => (
            <MenuItem key={mode.id} value={mode.field}>
              {mode.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        sx={{ marginLeft: "10px" }}
        onClick={onStartClick}
        variant="contained"
      >
        Start
      </Button>
    </Box>
  );
};
