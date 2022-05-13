import { Container, Divider, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MissionNameAndPatch } from "./parts/MissionNameAndPatch";
import { getSingleLaunch } from "../../services/spacexAPI";
import {
  ChipLaunch,
  CircularProgressHoum,
  TypographySubtitle,
} from "../../styles-css/components";
import { Launch } from "../../types/launches";
import { LinkList } from "./parts/LinkList";
import { Description } from "./parts/Description";
export const LaunchDetails = () => {
  const { launchId } = useParams();
  const [data, setData] = useState<Launch>();

  useEffect(() => {
    getSingleLaunch(launchId).then((resp) => {
      setData(resp);
    });
  }, [launchId]);

  if (!data) {
    return <CircularProgressHoum />;
  }

  if (data) {
    return (
      <Container>
        <Grid container flexDirection="row" marginTop={5}>
          <Grid item md={12} sm={12} lg={12}>
            <Stack spacing={2}>
              <MissionNameAndPatch
                missionName={data.mission_name}
                missionPatch={data.links.mission_patch_small}
              />
              <TypographySubtitle>
                {data.launch_site.site_name_long}
              </TypographySubtitle>
              <ChipLaunch
                label={data.launch_success ? "Exitoso" : "Fallido"}
                sx={{
                  backgroundColor: data.launch_success ? "#99D271" : "#FF452B",
                  maxWidth: "5rem",
                }}
              />
              <Divider />
              <Description
                description={data.details ?? data.launch_failure_details.reason}
              />
              <Divider />
              <LinkList links={data.links} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    );
  }
};
