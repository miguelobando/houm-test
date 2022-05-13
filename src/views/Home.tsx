import { CircularProgressHoum } from "../styles-css/components";
import { Grid, Typography } from "@mui/material";
import { LaunchItem } from "../components/LaunchItem";
import { useLaunches } from "../hooks/useLaunches";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { FilterBar } from "./FilterBar";
export const Home = () => {
  const { launches, setFilter, addMore, isLoading, hasMore } = useLaunches();

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasMore,
    onLoadMore: addMore,
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

  if (launches.length === 0 && isLoading) {
    return <CircularProgressHoum />;
  } else if (launches.length === 0 && !isLoading) {
    return (
      <>
        <Grid container marginLeft={3}>
          <FilterBar setFilter={setFilter} />
        </Grid>
        <Grid container>
          <Grid item justifyItems="center">
            <Typography justifySelf="center">{"Sin datos"}</Typography>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container marginLeft={3}>
          <FilterBar setFilter={setFilter} />
        </Grid>

        <Grid container spacing={2}>
          <LaunchItem data={launches} />
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "10vh" }}
        >
          {hasMore && (
            <Grid item justifySelf="center" ref={sentryRef}>
              <CircularProgressHoum />
            </Grid>
          )}
        </Grid>
      </>
    );
  }
};
