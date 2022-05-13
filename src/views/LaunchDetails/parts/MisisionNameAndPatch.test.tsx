import "@testing-library/jest-dom/extend-expect";
import { MissionNameAndPatch } from "./MissionNameAndPatch";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Link list from Launch Details component", () => {
  const mockedData = {
    mission_name: "test mission",
    mission_patch: "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
  };
  test("Renders the text and the icon", () => {
    render(
      <MissionNameAndPatch
        missionName={mockedData.mission_name}
        missionPatch={mockedData.mission_patch}
      />
    );
    const mission_name = screen.getByText("test mission");
    const mission_patch = screen.getByAltText("Mission patch");
    expect(mission_name).not.toBe(null);
    expect(mission_patch).not.toBe(null);
  });
});
