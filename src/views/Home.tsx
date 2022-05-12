import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressHoum } from "../styles-css/components";
import { Grid, Typography } from "@mui/material";
import { LaunchItem } from "../components/LaunchItem";
import { useLaunches } from "../hooks/useLaunches";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { orderParams } from "../app/options";
import { Filter } from "../components/Filter";
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
      <Grid container>
        {orderParams.map((e) => {
          return <Filter params={e} setFilter={setFilter} />;
        })}
        <Grid item xs={12} md={4} lg={4}>
          <Typography alignSelf="center">{"Sin datos"}</Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <Grid container marginLeft={3}>
          {orderParams.map((e) => {
            return <Filter params={e} setFilter={setFilter} />;
          })}
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
