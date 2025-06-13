import { render } from "@testing-library/react";
import ItemNavBar from "../../../components/navbar/ItemNavBar";

describe("<ItemNavBar />", () => {
  test("should render component", () => {
    const component = render(<ItemNavBar title="Skills" />);

    component.getByText("Skills");
  });
});
