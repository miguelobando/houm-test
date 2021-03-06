import { Launch } from "../../../types/launches";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import {
  Typography,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Grid,
  Divider,
  CardActionArea,
} from "@mui/material";
import {
  CardHoum,
  ChipLaunch,
  TypographyRocket,
} from "../../../styles/components";
import { useNavigate } from "react-router-dom";
export const LaunchItem = ({ data }: { data: Launch[] }) => {
  const navigate = useNavigate();

  const sendTo = (id: number) => {
    navigate(`/launch/${id}`);
  };
  return (
    <>
      {data.map((e, i) => (
        <Grid item xs={12} md={4} lg={4}>
          <CardHoum key={i}>
            <CardActionArea onClick={() => sendTo(e.flight_number)}>
              <CardMedia
                component="img"
                height="194"
                image={
                  e.links.flickr_images[0] ??
                  "https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
                }
              />
              <Grid container>
                <Grid item xs={8} md={8} lg={8}>
                  <CardHeader
                    avatar={<Avatar src={e.links.mission_patch_small} />}
                    title={e.mission_name}
                    subheader={dayjs(e.launch_date_local)
                      .locale("ES")
                      .format("D MMMM, YYYY")}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={4}
                  lg={4}
                  alignSelf="center"
                  justifySelf="center"
                >
                  <ChipLaunch
                    label={e.launch_success ? "Exitoso" : "Fallido"}
                    sx={{
                      backgroundColor: e.launch_success ? "#99D271" : "#FF452B",
                    }}
                  />
                </Grid>
              </Grid>

              <CardContent>
                <Typography>
                  {`Lugar de lanzamiento: ${e.launch_site.site_name}`}
                </Typography>
              </CardContent>
              <CardMedia>
                <Divider />
                <TypographyRocket>
                  <RocketOutlinedIcon fontSize="small" />
                  {`${e.rocket.rocket_name}`}
                </TypographyRocket>
              </CardMedia>
            </CardActionArea>
          </CardHoum>
        </Grid>
      ))}
    </>
  );
};
