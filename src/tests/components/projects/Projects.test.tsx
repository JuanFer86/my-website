import { render } from "@testing-library/react";
import Projects from "../../../components/projects/Projects";

describe("<Projects />", () => {
  test("should render component", () => {
    const component = render(<Projects />);

    component.getByText("Devtree Frontend");
  });
});
