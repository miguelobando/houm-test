import { Grid, Stack, Typography } from "@mui/material";
import { TypographySubtitle } from "../../../styles/components";

export const Description = ({ description }: { description: string }) => {
  return (
    <Grid container>
      <Stack>
        <TypographySubtitle>{"Descripción"}</TypographySubtitle>
        <Typography>{description}</Typography>
      </Stack>
    </Grid>
  );
};
