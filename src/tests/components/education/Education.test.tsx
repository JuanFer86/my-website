import { render } from "@testing-library/react";
import Education from "../../../components/education/Education";

describe("<Education />", () => {
  test("should render component", () => {
    const component = render(<Education />);

    component.getByText("Universidad Autónoma de Occidente");
  });
});
