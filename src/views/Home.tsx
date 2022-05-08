import React, { useEffect } from "react";
import { Launch } from "../types/launches";
import CircularProgress from "@mui/material/CircularProgress";
import * as API from "../../src/features/launches/spacexAPI";
import { Container } from "@mui/material";
import { LaunchItem } from "../components/LaunchItem";

export const Home = () => {
  const [data, setData] = React.useState<Launch[]>([]);
  useEffect(() => {
    API.getLaunches().then((res) => setData(res));
  }, [data]);

  if (data.length === 0) {
    return <CircularProgress />;
  } else {
    return (
      <Container>
        <LaunchItem data={data}></LaunchItem>
      </Container>
    );
  }
};
