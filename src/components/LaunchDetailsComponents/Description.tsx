import { Grid, Stack, Typography } from "@mui/material";
import ShowMoreText from "react-show-more-text";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import { useEffect, useState } from "react";
import { TypographySubtitle } from "../../styles-css/components";

export const Description = ({ description }: { description: string }) => {
  const [expand, setExpand] = useState(false);
  const [truncatedText, setTruncatedText] = useState("");
  useEffect(() => {
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += description[i];
    }
    result += "...";
    setTruncatedText(result);
  }, [description]);

  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <Grid container>
      <Stack>
        <TypographySubtitle>{"Descripción"}</TypographySubtitle>
        <ShowMoreText
          lines={2}
          more={"Ver más"}
          less={"Ver menos"}
          onClick={onClick}
          expanded={expand}
          width={30}
          truncatedEndingComponent={truncatedText}
        >
          <Typography>{description}</Typography>
        </ShowMoreText>
      </Stack>
    </Grid>
  );
};
