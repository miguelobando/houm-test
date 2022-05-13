import {
  CircularProgressHoum,
  TypographyFilter,
} from "../../styles/components";
import { Grid, Typography } from "@mui/material";
import { LaunchItem } from "./parts/LaunchItem";
import { useLaunches } from "../../hooks/useLaunches";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { FilterBar } from "./parts/FilterBar";
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
        <Grid container justifyContent="center">
          <Grid item justifyContent="center">
            <TypographyFilter height={100} justifySelf="center">
              {
                "¡Lo sentimos! No se encontraron lanzamientos con los parámetros ingresados"
              }
            </TypographyFilter>
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
