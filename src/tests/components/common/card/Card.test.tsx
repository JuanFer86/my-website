import { render } from "@testing-library/react";
import Card from "../../../../components/common/card/Card";

describe("<Card />", () => {
  test("should render", () => {
    const props = {
      title: "Rendering",
      children: <></>,
    };
    const component = render(<Card {...props} />);
    component.getByText("Rendering");
    expect(
      component.container.querySelector(".container-card-medium")
    ).not.toBeNull();
  });

  test("should render description, size image and link", () => {
    const props = {
      description: "Description",
      image: "src/assets/git.webp",
      link: "https://github.com/JuanFer86/cashtrackr_frontend",
      title: "Rendering",
      children: <></>,
    };
    const component = render(<Card size="b" {...props} />);
    const container = component.container;

    component.getByText("Rendering");
    component.getByText("Description");

    expect(container.querySelector("img")).not.toBeNull();
    expect(container.querySelector("a")).not.toBeNull();
    expect(container.querySelector(".container-card-biggest")).not.toBeNull();
  });

  test("should render a children", () => {
    const props = {
      description: "Description",
      image: "src/assets/git.webp",
      link: "https://github.com/JuanFer86/cashtrackr_frontend",
      title: "Rendering",
      children: (
        <div className="test-children">
          <p>test</p>
        </div>
      ),
    };
    const component = render(<Card {...props} />);
    const container = component.container;

    component.getByText("test");
    expect(container.querySelector(".test-children")).not.toBeNull();
  });
});
