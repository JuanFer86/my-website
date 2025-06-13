import { render } from "@testing-library/react";
import Skills from "../../../components/skills/Skills";

describe("<Skills />", () => {
  test("should render component", () => {
    const component = render(<Skills />);

    component.getByText("Typescript");
  });
});
