import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getOptions } from "../services/spacexAPI";
import { CircularProgress } from "@mui/material";
import Options from "../types/options";

export const Filter = ({
  params,
  setFilter,
}: {
  params: Options;
  setFilter: (id: string, value: string) => void;
}) => {
  const [options, setOptions] = useState<Options[]>([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    getOptions(params.value).then((res) => {
      setOptions(res);
    });
  }, [params.value]);

  const handleOptionSelected = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
    setFilter(params.value, event.target.value);
  };

  // Sacar el caso de borde en caso de que el backend falle
  if (!options.length) {
    return <CircularProgress size="xs" />;
  } else {
    return (
      <Grid item xs={12} md={4} lg={4}>
        <FormControl fullWidth>
          <InputLabel id={params.value}>{params.label}</InputLabel>
          <Select
            label={params.label}
            labelId={params.value}
            onChange={handleOptionSelected}
            sx={{
              marginBottom: "20px",
              maxWidth: "250px",
            }}
            value={selectValue}
          >
            <MenuItem value={""}> {"Todos"} </MenuItem>
            {options.map((e, i) => {
              return (
                <MenuItem key={i} value={e.value}>
                  {e.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    );
  }
};
