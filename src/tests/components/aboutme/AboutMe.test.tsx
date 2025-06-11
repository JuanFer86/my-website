import AboutMe from "../../../components/aboutme/AboutMe";
import { render } from "@testing-library/react";

describe("<AboutMe />", () => {
  test("should renders content", () => {
    const component = render(<AboutMe />);

    component.getByText("Fullstack Developer");
  });
});
