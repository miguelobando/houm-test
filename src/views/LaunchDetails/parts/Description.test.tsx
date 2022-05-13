import "@testing-library/jest-dom/extend-expect";
import { Description } from "./Description";
import { render } from "@testing-library/react";
import React from "react";

describe("Description component from LaunchDetails view", () => {
  const fakeText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Donec eu ante purus. Nunc iaculis sem id venenatis maximus";
  const expected = fakeText.substring(0, 6);
  let view = render(<Description description={fakeText} />);

  it("Render the fake description", () => {
    expect(view.container).toHaveTextContent(expected);
  });
});
