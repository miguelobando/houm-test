import { Avatar, Grid } from "@mui/material";
import { TypographyMission } from "../../../styles-css/components";

export const MissionNameAndPatch = ({
  missionName,
  missionPatch,
}: {
  missionName: string;
  missionPatch: string;
}) => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item sm={6} md={6} lg={6}>
        <TypographyMission>{missionName}</TypographyMission>
      </Grid>
      <Grid item sm={6} md={6} lg={6} container justifyContent="flex-end">
        <Avatar
          alt="Mission patch"
          src={missionPatch}
          sx={{ width: 56, height: 56 }}
        />
      </Grid>
    </Grid>
  );
};
