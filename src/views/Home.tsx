import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Grid, Typography } from "@mui/material";
import { LaunchItem } from "../components/LaunchItem";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchLaunches,
  selectData,
  selectIsInProcess,
  selectPreviousParams,
  selectHasMore,
} from "../reducers/launches/LaunchesSlice";
import { FiltersBar } from "../components/FiltersBar";
import InfiniteScroll from "react-infinite-scroller";

export const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const isInProcess = useAppSelector(selectIsInProcess);
  const previousParams = useAppSelector(selectPreviousParams);
  const hasMore = useAppSelector(selectHasMore);
  useEffect(() => {
    dispatch(fetchLaunches({ params: "" }));
  }, []);

  const addMore = () => {
    dispatch(fetchLaunches({ params: "" }));
  };

  if (data.length === 0 && isInProcess) return <CircularProgress />;

  if (data.length === 0 && !isInProcess)
    return (
      <Container>
        <FiltersBar />
        <Typography>{"No data getted"}</Typography>
      </Container>
    );

  return (
    <Container>
      <FiltersBar />
      <InfiniteScroll
        pageStart={0}
        loadMore={addMore}
        hasMore={hasMore}
        loader={<CircularProgress />}
      >
        <Grid container spacing={2}>
          <LaunchItem data={data}></LaunchItem>
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};
