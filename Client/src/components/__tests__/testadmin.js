import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders button text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button text={buttonText} />);
    expect(getByText(buttonText)).toBeInTheDocument();
  });
});
