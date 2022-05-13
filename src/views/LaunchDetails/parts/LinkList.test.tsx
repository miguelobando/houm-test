import "@testing-library/jest-dom/extend-expect";
import { LinkList } from "./LinkList";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Links } from "../../../types/launches";

const mockedData: Links = {
  mission_patch: "www.hire.me",
  mission_patch_small: "www.contrata.me",
  reddit_campaign: null,
  reddit_launch: "www.a.mi",
  reddit_media: null,
  presskit: null,
  article_link: "www.por.favor.com",
  wikipedia: "www.google.cl",
  video_link: "www.google.co.ve",
  youtube_id: "www.altavista.com",
  flickr_images: [],
};

describe("Link list from Launch Details component", () => {
  it("Render all the icons", () => {
    render(<LinkList links={mockedData} />);
    const reddit = screen.getByTestId("redditIcon");
    const youtube = screen.getByTestId("youtubeIcon");
    const article = screen.getByTestId("articleIcon");
    const wikipedia = screen.getByTestId("wikipediaIcon");

    expect(reddit).toBeInTheDocument();
    expect(youtube).toBeInTheDocument();
    expect(article).toBeInTheDocument();
    expect(wikipedia).toBeInTheDocument();
  });

  it("Render just the icons with link available", () => {
    mockedData.reddit_launch = null;
    render(<LinkList links={mockedData} />);
    const reddit = screen.queryByTestId("redditIcon");
    const youtube = screen.getByTestId("youtubeIcon");
    const article = screen.getByTestId("articleIcon");
    const wikipedia = screen.getByTestId("wikipediaIcon");

    expect(reddit).toBeNull();
    expect(youtube).toBeInTheDocument();
    expect(article).toBeInTheDocument();
    expect(wikipedia).toBeInTheDocument();
  });
});
