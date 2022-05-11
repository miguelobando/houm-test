import { Grid, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import Options from "../types/options";

const orderParams: Options[] = [
  {
    label: "Año",
    value: "launch_year",
  },
  {
    label: "Resultado Final",
    value: "launch_success",
  },
  // {
  //   label: "Sitio de lanzamiento",
  //   value: "site_id",
  // },
  {
    label: "Cohete",
    value: "rocket_name",
  },
];

export const FiltersBar = () => {
  return (
    <Grid container>
      {orderParams.map((e) => {
        return (
          <Grid item xs={3}>
            <Filter params={e} />
          </Grid>
        );
      })}
    </Grid>
  );
};
