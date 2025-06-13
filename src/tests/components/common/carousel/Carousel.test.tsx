import { render } from "@testing-library/react";
import Carousel from "../../../../components/common/carousel/Carousel";

describe("<Carousel />", () => {
  test("should ", () => {
    const component = render(
      <Carousel>
        {new Array(5).fill(0).map((_, i) => (
          <div key={i}>
            <p>child</p>
          </div>
        ))}
      </Carousel>
    );

    expect(
      component.container.querySelectorAll(".container-carousel")
    ).not.toBeNull();
    expect(
      component.container.querySelectorAll(".container-carousel-track")
    ).not.toBeNull();
    expect(component.container.querySelectorAll("div")).toHaveLength(7);
  });
});
