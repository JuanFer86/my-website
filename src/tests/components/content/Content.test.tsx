import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Content from "../../../components/content/Content";
import { Context } from "../../../context";

export type mockType = {
  viewSelected: { view: number; direction: string };
  dispatchtViewSelected: () => void;
  hasManyViews: number;
};

describe("<Content />", () => {
  const component = (mockContextValue: mockType) =>
    render(
      <Context.Provider value={mockContextValue}>
        <Content>
          <></>
        </Content>
      </Context.Provider>
    );

  test("should render component with both button arrows", () => {
    const container = component({
      viewSelected: { view: 0, direction: "bottom" },
      dispatchtViewSelected: jest.fn(),
      hasManyViews: 5,
    }).container;

    expect(container.querySelector(".container-content")).not.toBeNull();
    expect(
      container.querySelectorAll(".container-content-button")
    ).toHaveLength(1);
  });

  test("should change view after click button arrow down and arrow up", () => {
    const mockDispatch = jest.fn();
    const Component = component({
      viewSelected: { view: 1, direction: "bottom" },
      dispatchtViewSelected: mockDispatch,
      hasManyViews: 5,
    });

    const container = Component.container;

    const buttonDown = container.querySelectorAll(
      ".container-content-button"
    )[1];

    fireEvent.click(buttonDown as Element);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "increment" });

    const buttonUp = container.querySelectorAll(".container-content-button")[0];
    fireEvent.click(buttonUp);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "decrement" });
  });

  test("should change view after move the scroll", () => {
    const mockDispatch = jest.fn();
    const Component = component({
      viewSelected: { view: 1, direction: "bottom" },
      dispatchtViewSelected: mockDispatch,
      hasManyViews: 5,
    });

    const container = Component.container;
    const content = container.querySelector(".container-content");

    const animation = container.querySelector(".rotate-down-enter");
    animation?.dispatchEvent(new Event("animationend"));

    fireEvent.wheel(content as Element, { deltaY: 100 });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "increment" });

    fireEvent.wheel(content as Element, { deltaY: -100 });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "decrement" });
  });

  test("should change view after touch start and end the screen", () => {
    const mockDispatch = jest.fn();
    const Component = component({
      viewSelected: { view: 1, direction: "bottom" },
      dispatchtViewSelected: mockDispatch,
      hasManyViews: 5,
    });

    const container = Component.container;
    const content = container.querySelector(".container-content");

    const animation = container.querySelector(".rotate-down-enter");
    animation?.dispatchEvent(new Event("animationend"));

    fireEvent.touchStart(content as Element, { touches: [{ clientY: 70 }] });
    fireEvent.touchEnd(content as Element, {
      changedTouches: [{ clientY: 30 }],
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "increment" });

    fireEvent.touchStart(content as Element, {
      touches: [{ clientY: 30 }],
    });
    fireEvent.touchEnd(content as Element, {
      changedTouches: [{ clientY: 70 }],
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "decrement" });
  });
});
