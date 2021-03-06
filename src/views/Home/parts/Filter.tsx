import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getOptions } from "../../../services/spacexAPI";
import Options from "../../../types/options";
import { CircularProgressHoum } from "../../../styles/components";

export const Filter = ({
  params,
  setStack,
}: {
  params: Options;
  setStack: (key: string, value: string) => void;
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
    setStack(params.value, event.target.value);
  };

  if (!options.length) {
    return <CircularProgressHoum size="xs" />;
  } else {
    return (
      <>
        <FormControl fullWidth>
          <Select
            labelId={params.value}
            onChange={handleOptionSelected}
            displayEmpty
            sx={{
              marginBottom: "20px",
              maxWidth: "250px",
              borderRadius: "30px",
            }}
            value={selectValue}
            renderValue={(selected) => {
              // Esto puede ser mejorado
              if (!selected || selected === "remove") {
                return <em>{"Todos"}</em>;
              }
              // Esto puede ser mejorado, es problema de concepto de la api
              if (selected === "false") {
                return "Fallido";
              }
              if (selected === "true") {
                return "Exitoso";
              }

              return selected;
            }}
          >
            <MenuItem value="">{"Todos"}</MenuItem>
            {options.map((e, i) => {
              return (
                <MenuItem key={i} value={e.value}>
                  {e.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </>
    );
  }
};
