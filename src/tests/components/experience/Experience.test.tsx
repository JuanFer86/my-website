import { render } from "@testing-library/react";
import Experience from "../../../components/experience/Experience";

describe("<Experience />", () => {
  test("should render component", () => {
    const props = {
      items: [
        {
          backgroundColor: "#000",
          date: "2020 - 2025",
          description: "Description experience",
          title: "Playgreen",
        },
      ],
    };

    const component = render(<Experience {...props} />);

    component.getByText("Playgreen");
    expect(component.container.children).toHaveLength(1);
  });
});
