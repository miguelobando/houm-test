import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { getOptions } from "../reducers/launches/spacexAPI";
import { CircularProgress } from "@mui/material";
import Options from "../types/options";
import { useAppDispatch } from "../app/hooks";
import {
  wipeLaunches,
  fetchLaunches,
  removeFilter,
} from "../reducers/launches/LaunchesSlice";

export const Filter = ({ params }: { params: Options }) => {
  const [options, setOptions] = useState<Options[]>([]);
  const [selectValue, setSelectValue] = useState<string | unknown>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    getOptions(params.value).then((res) => {
      console.log(`${params.value} ${res}`);
      setOptions(res);
    });
  }, []);

  useEffect(() => {
    if (selectValue !== "") {
      dispatch(removeFilter(params.value));
      dispatch(wipeLaunches());
      if (selectValue === "remove") {
        dispatch(fetchLaunches({ params: "" }));
      } else {
        dispatch(fetchLaunches({ params: `&${params.value}=${selectValue}` }));
      }
    }
  }, [dispatch, selectValue, params.value]);

  if (options.length === 0) {
    return <CircularProgress size="xs" />;
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={params.value}>{params.label}</InputLabel>
      <Select
        label={params.label}
        labelId={params.value}
        onChange={(ev) => setSelectValue(ev.target.value)}
        sx={{
          marginBottom: "20px",
          maxWidth: "250px",
        }}
      >
        <MenuItem>{params.label}</MenuItem>
        <MenuItem value={"remove"}> {"Todos"} </MenuItem>
        {options.map((e, i) => {
          return (
            <MenuItem key={i} value={e.value}>
              {e.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
