import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import { LaunchItem } from "../components/LaunchItem";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchLaunches, selectData } from "../reducers/launches/LaunchesSlice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  useEffect(() => {
    dispatch(fetchLaunches({}));
  }, []);

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
