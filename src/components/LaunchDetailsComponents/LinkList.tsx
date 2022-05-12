import { Grid, SvgIcon } from "@mui/material";
import { FaWikipediaW } from "react-icons/fa";
import { iconStyle } from "../../styles-css/components";
import { Links } from "../../types/launches";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const LinkList = ({ links }: { links: Links }) => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Grid container direction="row" justifyContent="space-around">
      {links.article_link && (
        <Grid item>
          <SvgIcon sx={iconStyle}>
            <ArticleOutlinedIcon onClick={() => openLink(links.article_link)} />
          </SvgIcon>
        </Grid>
      )}

      {links.reddit_launch && (
        <Grid item sx={iconStyle}>
          <RedditIcon onClick={() => openLink(links.reddit_launch)} />
        </Grid>
      )}

      {links.video_link && (
        <Grid item>
          <SvgIcon sx={iconStyle}>
            <YouTubeIcon onClick={() => openLink(links.video_link)} />
          </SvgIcon>
        </Grid>
      )}

      {links.wikipedia && (
        <Grid item>
          <FaWikipediaW
            style={iconStyle}
            onClick={() => openLink(links.wikipedia)}
          />
        </Grid>
      )}
    </Grid>
  );
};
