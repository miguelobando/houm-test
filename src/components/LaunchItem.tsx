import { Launch } from "../types/launches";
import dayjs from "dayjs";
import {
  Stack,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";
export const LaunchItem = ({ data }: { data: Launch[] }) => {
  return (
    <>
      {data.map((e, i) => (
        <Grid item xs={8} md={4} lg={4}>
          <Card key={i} sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="194"
              image={
                e.links.flickr_images[0] ??
                "https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
              }
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10%",
                textAlign: "left",
                color: "black",
                backgroundColor: e.launch_success ? "green" : "red",
                fontFamily: "Comic Sans MS",
                width: "fit-content",
                opacity: 0.5,
              }}
            >
              {e.launch_success ? "Succesful" : "Failed"}
            </Typography>
            <CardHeader
              avatar={<Avatar src={e.links.mission_patch_small} />}
              title={e.mission_name}
              subheader={dayjs(e.launch_date_local)
                .locale("es")
                .format("D MMMM, YYYY")}
            />
            <CardContent>
              <Grid container spacing={2}>
                <Stack marginLeft={2}>
                  <Typography>{`Rocket: ${e.rocket.rocket_name}`}</Typography>
                  <Typography>{`Launch Site: ${e.launch_site.site_name}`}</Typography>
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
